const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        minlength: [3, "Username must be at least 3 characters"],
        maxlength: [20, "Username can't be more than 20 characters"],
        unique: true,
    },
    email: {
        type: String,
        maxlength: [50, "Email can't be more than 50 characters"],
        required: [true, "Email is required"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Password must be at least 8 characters"],
        select: false,
    },
    isAvatarImageSet: {
        type: Boolean,
        default: false,
    },
    avatarImage: {
        type: String,
        default: "",
    },
});

// Hash password when creating new user
UserSchema.pre("save", async function (next) {
    // Only hash the password if it has been modified (or is new)
    if (!this.isModified("password")) {
        return next();
    }

    try {
        // Generate hashed password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(this.password, salt);

        this.password = hashedPassword;
        next();
    } catch (err) {
        return next(err);
    }
});

// Create virtual confirm password property
UserSchema.virtual("confirmPassword")
    .get(function () {
        return this._confirmPassword;
    })
    .set(function (value) {
        this._confirmPassword = value;
    });

// Validate that password and confirmPassword matching
UserSchema.pre("validate", function (next) {
    // Only if user doesn't send blank password
    if (this.password && this.password !== this.confirmPassword) {
        this.invalidate("confirmPassword", "Enter the same password");
    }

    next();
});

module.exports = mongoose.model("users", userSchema);
