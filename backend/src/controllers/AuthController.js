const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const models = require("../models");

class AuthController {
  static signup = (req, res) => {
    const user = req.body;

    user.password = bcrypt.hashSync(
      user.password,
      parseInt(process.env.CRYPT_ROUNDS, 10)
    );

    models.user
      .insert(user)
      .then(([result]) => {
        user.id = result.insertId;
        delete user.password;
        const token = jwt.sign(user, process.env.JWT_SECRET);
        res.status(201).send({ user, token });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static login = (req, res) => {
    const token = jwt.sign(req.user, process.env.JWT_SECRET);
    res.status(200).json({ user: req.user, token });
  };
}

module.exports = AuthController;
