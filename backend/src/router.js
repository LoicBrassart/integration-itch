const express = require("express");
const passport = require("passport");
const multer = require("multer");
const { AuthController } = require("./controllers");

const upload = multer({ dest: "tmp/" });

const router = express.Router();

router.post("/auth/signup", upload.single("avatar"), AuthController.signup);
router.post(
  "/auth/login",
  passport.authenticate("local", { session: false }),
  AuthController.login
);

module.exports = router;
