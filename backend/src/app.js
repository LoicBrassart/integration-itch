const express = require("express");
const path = require("path");
const cors = require("cors");
const passport = require("passport");
const cloudinary = require("cloudinary").v2;
const session = require("express-session");
const router = require("./router");

// let's create express app
const app = express();

// use some application-level middlewares
const whitelist = process.env.FRONTEND_URL.split(",") || [
  "http://localhost:3000/",
];
app.use(
  cors({
    origin(origin, callback) {
      if (whitelist.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    optionsSuccessStatus: 200,
  })
);

app.use(express.json());

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);

app.use(express.static(path.join(__dirname, "../public")));

app.use(passport.initialize());
require("./services/passport");

cloudinary.config({
  secure: true,
});

// load router
app.use(router);

// ready to export
module.exports = app;
