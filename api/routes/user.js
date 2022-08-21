const router = require("express").Router();
const { setAvatar, getUsers } = require("../controllers/UserController");
const authorization = require("../middlewares/authorization");

router.get("/", authorization, getUsers);
router.put("/setAvatar", authorization, setAvatar);

module.exports = router;
