const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const messageRoute = require("./routes/message");

// App config
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5050;

// Middlewares
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(cookieParser());

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
