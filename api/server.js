const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const messageRoute = require("./routes/message");
const socket = require("socket.io");

// App config
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5050;

// Middlewares
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

// DB connection
mongoose.connect(process.env.MONGO_URL, () => {
    console.log("DB connected");
});

// API routes
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/messages", messageRoute);

// Listener
const server = app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

// Socket.io
const io = socket(server, {
    cors: {
        origin: "http://localhost:3000",
        credentials: true,
    },
});

global.onlineUsers = new Map();

io.on("connection", (socket) => {
    global.chatSocket = socket;

    socket.on("add-user", (userId) => {
        onlineUsers.set(userId, socket.id);
    });

    socket.on("send-msg", ({ message, recipient }) => {
        const sendUserSocket = onlineUsers.get(recipient);

        // Check if user is online
        if (sendUserSocket) {
            socket.to(sendUserSocket).emit("msg-receive", message);
        }
    });
});
