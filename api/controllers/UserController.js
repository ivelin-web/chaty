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
