const UserModel = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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

// Login
module.exports.login = async (req, res) => {
    const { username, password } = req.body;
    const invalidUserMessage = "Wrong email or password";

    try {
        // Validate username
        const user = await UserModel.findOne({ username }).select("+password");

        if (!user) {
            return res.status(401).json({ message: invalidUserMessage });
        }

        // Validate password
        const isValidPassword = await bcrypt.compare(password, user.password);

        if (!isValidPassword) {
            return res.status(401).json({ message: invalidUserMessage });
        }

        // Generate jwt token
        const token = jwt.sign({ _id: user.id }, process.env.TOKEN_SECRET_KEY);

        // Return res with cookie
        res.cookie("access_token", token, {
            secure: process.env.NODE_ENV !== "development",
            sameSite: "none",
            httpOnly: true,
        }).json({ message: "Logged in successfully" });
    } catch (err) {
        res.status(500).json(err);
    }
};

// Logout
module.exports.logout = async (req, res) => {
    res.clearCookie("access_token").json({ message: "Successfully logged out" });
};

// Get auth user
module.exports.authUser = async (req, res) => {
    try {
        const user = await UserModel.findById(req.user._id).select("-updatedAt");

        res.json(user);
    } catch (err) {
        res.status(500).json(err);
    }
};
