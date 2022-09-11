const MessageModel = require("../models/Message");

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
