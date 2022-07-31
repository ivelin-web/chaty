const UserModel = require("../models/User");

// Register
module.exports.register = async (req, res) => {
    const { username, email, password, confirmPassword } = req.body;

    try {
        // Create new user
        const user = await UserModel.create({
            username,
            email,
            password,
            confirmPassword,
        });

        res.status(201).json({ message: "You have been registered successfully" });
    } catch (err) {
        res.status(500).json(err);
    }
};
