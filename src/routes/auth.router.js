const router = require("express").Router();
const authController = require("../controllers/authController");
const verifyJWTToken = require("../middleware/verifyJWTToken");
router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/refresh", authController.requestRefreshToken);
router.post("/logout", verifyJWTToken.verifyToken, authController.logout);

module.exports = router;
