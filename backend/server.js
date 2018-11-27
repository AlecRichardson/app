const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const UsersRoute = require("./routes/api/users");

const app = express();
var socketio = require('socket.io');
var http = require('http');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 3001;

/* * * * DB CONFIG * * * */

const config = require("./config.js");
mongoose.connect(
  "mongodb://" +
    config.user +
    ":" +
    config.pass +
    "@ds151293.mlab.com:51293/hackweek",
  {
    useMongoClient: true
  }
);

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));

db.once("open", function() {
  console.log("DB connected");
});

/* * * * * API ROUTES * * * * * */
const router = express.Router();

router.use(function(req, res, next) {
  console.log("Request received with ready state [" + db.readyState + "]");
  next();
});

router.get("/", function(req, res) {
  res.json({ message: "hello world! " });
});

router.route("/users").post(function(req, res) {
  let user = new User();
  user.username = req.body.username;

  user.save(function(err) {
    if (err) {
      res.send(err);
    }

    res.json({ message: "User created!" });
  });
});

app.use("/api/users", UsersRoute);


var server = http.Server(app);
var io = socketio(server);

server.listen(port, () => console.log('Listening on port ' + port + "..."));


/* * * * WEBSOCKETS FOR CHATTING * * * */
const Message = require("./models/message");
var clients = {};
var users = {};

io.on('connection', (socket) => {
  console.log('A client just joined: ', socket.id);

  socket.on('disconnect', () => {
    console.log('A client disconnected: ', socket.id);
  });

  socket.on('chat message', (data) => {
    console.log('to: ' + data.to);
    console.log('from: ' + data.from);
    console.log('message: ' + data.msg);

    io.sockets.in(data.to).emit('new message', {msg: data.msg, from: data.from});

    let message = new Message();
    message.to = data.to;
    message.from = data.from;
    message.text = data.msg;
    message.createdAt = Date.now();

    message.save( (err) => {
      if(err) {
        console.log(err);
      }

      console.log("Message created!");
    })
  });

  socket.on('join', (data) => {
    console.log(data.userId + " just joined");
    socket.join(data.userId);
  })
});
