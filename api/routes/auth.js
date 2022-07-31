const router = require("express").Router();
const { register, login, logout, authUser } = require("../controllers/AuthController");

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/user", authUser);
