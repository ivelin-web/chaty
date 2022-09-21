module.exports = (socket) => {
    socket.on("add-user", (userId) => {
        global.onlineUsers.set(userId, socket.id);
    });
};
