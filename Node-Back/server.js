const express = require("express");
const next = require("next");
const mongoose = require('mongoose');

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const server = express();
const MONGO_URI = "mongodb+srv://razen:1234@cluster0.r48gi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// Router
const signRouter = require('./routes/register');

var port = 3000;

app.prepare().then(() => {
  server.get("/usb", (req, res) => {
    console.log("Main Page Access!!!");
    return app.render(req, res, "/");
  });

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log("Node.JS   PORT   >>>   " + port);
  });
});

// Router 디렉토리 내부 파일 연갈

server.use(express.static('public'));
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

server.use('/', signRouter);

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Successfully connected to mongodb!!!'))
  .catch(e => console.error(e));