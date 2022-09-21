// Load all listeners
const onAddUser = require("./onAddUser");

// Export all listeners
module.exports = {
    onAddUser: (socket) => onAddUser(socket),
};
