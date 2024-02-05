const { register,login,logOut } = require("../controllers/usersController");

const router = require("express").Router();
router.post("/register",register);
router.post("/login",login);
router.get("/logout/:id", logOut);

module.exports = router;