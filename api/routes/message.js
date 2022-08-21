const router = require("express").Router();
const { addMessage, getMessages } = require("../controllers/MessageController");
const authorization = require("../middlewares/authorization");

router.get("/", authorization, getMessages);
router.post("/", authorization, addMessage);

module.exports = router;
