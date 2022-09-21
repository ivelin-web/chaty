const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
    {
        text: {
            type: String,
            required: [true, "Text is required"],
        },
        sender: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: [true, "Sender is required"],
        },
        users: Array,
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Message", messageSchema);
