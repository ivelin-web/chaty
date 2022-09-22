module.exports = (socket) => {
    socket.on("remove-user", (userId) => {
        global.onlineUsers.delete(userId);
    });
};
