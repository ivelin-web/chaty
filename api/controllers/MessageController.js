const MessageModel = require("../models/Message");
const UserModel = require("../models/User");

// Add message
module.exports.addMessage = async (req, res) => {
    const { recipient, text } = req.body;

    // Check if recipient is current user
    if (req.user._id === recipient) {
        return res.status(400).json({ message: "You cannot send a message to yourself" });
    }

    try {
        const message = await MessageModel.create({
            text,
            sender: req.user._id,
            users: [req.user._id, recipient],
        });
        const recipientUser = await UserModel.findById(recipient);
        const sendUserSocket = global.onlineUsers.get(recipient);
        const io = require("../socket").getIO();

        // Check if recipient user doesn't include unread message from current user
        if (!recipientUser.unreadMessages.includes(req.user._id)) {
            recipientUser.unreadMessages.push(req.user._id);
            const updatedUser = await recipientUser.save();

            // Check if user is online
            if (sendUserSocket) {
                io.to(sendUserSocket).emit("unread-msg-receive", updatedUser);
            }
        }

        // Check if user is online
        if (sendUserSocket) {
            io.to(sendUserSocket).emit("msg-receive", message);
        }

        res.status(201).json(message);
    } catch (err) {
        res.status(500).json(err);
    }
};

// Get all messages
module.exports.getMessages = async (req, res) => {
    const { otherUser } = req.query;

    // Check if otherUser is current user
    if (req.user._id === otherUser) {
        return res.status(400).json({ message: "Other user must be a user different from yourself" });
    }

    try {
        const messages = await MessageModel.find({
            users: {
                $all: [req.user._id, otherUser],
            },
        }).sort({ updatedAt: 1 });

        res.json(messages);
    } catch (err) {
        res.status(500).json(err);
    }
};
