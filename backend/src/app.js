const express = require("express");
const path = require("path");
const cors = require("cors");
const passport = require("passport");
const cloudinary = require("cloudinary").v2;
const session = require("express-session");

// let's create express app
const app = express();

// use some application-level middlewares
const whitelist = process.env.FRONTEND_URL.split(",") || [
  "http://localhost:3000/",
];
app.use(
  cors({
    origin(origin, callback) {
      if (whitelist.indexOf(origin) !== -1 || origin === undefined) {
        // if (true) {
        callback(null, true);
      } else {
        callback(new Error(`Not allowed by CORS: ${origin}`));
      }
    },
    optionsSuccessStatus: 200,
  })
);

const server = require("http").createServer(app);
const io = require("socket.io")(server, {
  allowRequest: (req, callback) => {
    const noOriginHeader = req.headers.origin === undefined;
    callback(null, noOriginHeader);
  },
});
const router = require("./router");

let nextMsg = 1;
const initialMessages = [];
let messages = [];
const addMessage = (data) => {
  const newMsg = {
    id: (nextMsg += 1),
    author: "Big Brother",
    content: "42!",
    time: new Date().toLocaleTimeString("fr-FR"),
    ...data,
  };
  messages.push(newMsg);
  io.emit("listMsg", messages);
  return newMsg;
};

io.on("connection", (socket) => {
  socket.emit("listMsg", messages);
  addMessage({ content: "A new challenger appears!" });

  socket.on("sendMsg", (data) => {
    addMessage(data);
  });

  socket.on("disconnect", () => {
    addMessage({ content: "Someone left us tonight..." });
  });
});

app.get("/", (req, res) => {
  messages = initialMessages;
  io.emit("listMsg", messages);
  res.send("Flush everything!");
});

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
