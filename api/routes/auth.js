const router = require("express").Router();
const { register, login, logout, authUser } = require("../controllers/AuthController");
const authorization = require("../middlewares/authorization");

router.post("/register", register);
router.post("/login", login);
router.post("/logout", authorization, logout);
router.get("/user", authorization, authUser);

module.exports = router;
