// Load all listeners
const onAddUser = require("./onAddUser");
const onRemoveUser = require("./onRemoveUser");

// Export all listeners
module.exports = {
    onAddUser: (socket) => onAddUser(socket),
    onRemoveUser: (socket) => onRemoveUser(socket),
};
