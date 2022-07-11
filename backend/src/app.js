const express = require("express");
const path = require("path");
const cors = require("cors");
const passport = require("passport");
const cloudinary = require("cloudinary").v2;

// let's create express app

const app = express();

// use some application-level middlewares
app.use(
  cors({
    origin: process.env.FRONTEND_URL ?? "http://localhost:3000",
    optionsSuccessStatus: 200,
  })
);

app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));
app.use(passport.initialize());
cloudinary.config({
  secure: true,
});

// load router

const router = require("./router");

app.use(router);

// ready to export
module.exports = app;
