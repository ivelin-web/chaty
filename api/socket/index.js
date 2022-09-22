const { onAddUser, onRemoveUser } = require("./listeners");

let io = null;

module.exports = {
    init: (server) => {
        io = require("socket.io")(server, {
            cors: {
                origin: process.env.CLIENT_URL,
                credentials: true,
            },
        });

        loadIOListeners();
    },
    getIO: () => {
        if (!io) {
            throw Error("Socket.io is not initiated");
        }

        return io;
    },
};

const loadIOListeners = () => {
    io.on("connection", (socket) => {
        onAddUser(socket);
        onRemoveUser(socket);
    });
};
