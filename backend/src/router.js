const express = require("express");
const passport = require("passport");
const multer = require("multer");
const { AuthController, contactController } = require("./controllers");
const UserController = require("./controllers/UserController");

const upload = multer({ dest: "tmp/" });

const router = express.Router();

router.get("/users", UserController.browse);

router.post("/auth/signup", upload.single("avatar"), AuthController.signup);
router.post(
  "/auth/login",
  passport.authenticate("local", { session: false }),
  AuthController.login
);
router.post("/contact", contactController.post);

// Auth Wall
router.use(passport.authenticate("jwt"));

router.get("/protected", (req, res) => {
  res.send(`Welcome ${req.user.name}`);
});

module.exports = router;
