const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { Strategy: JWTStrategy, ExtractJwt } = require("passport-jwt");
const bcrypt = require("bcrypt");
const models = require("../models");

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    (formMail, formPassword, done) => {
      try {
        models.user.findOneByMail(formMail).then(([result]) => {
          if (!result.length)
            return done(null, false, { msg: "Wrong username!" });

          const user = result[0];
          const isPasswordOK = bcrypt.compareSync(formPassword, user.password);
          if (!isPasswordOK) return done(null, false, "Wrong password!");

          delete user.password;
          return done(null, user);
        });
      } catch (err) {
        console.warn(err);
        return done(err);
      }
      return null;
    }
  )
);

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    },
    (jwtPayload, done) => {
      const user = jwtPayload;
      return done(null, user);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
