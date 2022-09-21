const UserModel = require("../models/User");

// Set avatar
module.exports.setAvatar = async (req, res) => {
    const { avatarImage } = req.body;

    try {
        // Update avatar image
        const userData = await UserModel.findByIdAndUpdate(
            req.user._id,
            {
                isAvatarImageSet: true,
                avatarImage,
            },
            {
                new: true,
            }
        );

        res.json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
};

// Get all users
module.exports.getUsers = async (req, res) => {
    try {
        const users = await UserModel.find({ _id: { $ne: req.user._id } }).select(["_id", "email", "username", "avatarImage"]);

        res.json(users);
    } catch (err) {
        res.status(500).json(err);
    }
};

// Remove unread message
module.exports.removeUnreadMessage = async (req, res) => {
    const { recipientId } = req.params;

    try {
        const user = await UserModel.findById(req.user._id);

        if (!user.unreadMessages.includes(recipientId)) {
            return res.status(400).json({ message: "You don't have unread messages from given user" });
        }

        // Remove unread message from this user
        user.unreadMessages = user.unreadMessages.filter((unreadMessageUser) => unreadMessageUser != recipientId);
        const updatedUser = await user.save();

        res.json(updatedUser);
    }
    catch (err) {
        res.status(500).json(err);
    }
}