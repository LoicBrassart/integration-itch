const express = require("express");
const passport = require("passport");

const { AuthController } = require("./controllers");

const router = express.Router();

router.post("/auth/signup", AuthController.signup);
router.post(
  "/auth/login",
  passport.authenticate("local", { session: false }),
  AuthController.login
);

module.exports = router;
