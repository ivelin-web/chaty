const router = require("express").Router();
const { setAvatar, getUsers, removeUnreadMessage} = require("../controllers/UserController");
const authorization = require("../middlewares/authorization");

router.get("/", authorization, getUsers);
router.put("/setAvatar", authorization, setAvatar);
router.delete("/unreadMessages/:recipientId", authorization, removeUnreadMessage);

module.exports = router;
