const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var socketio = require('socket.io');
var http = require('http');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = 3001;

/* * * * DB CONFIG * * * */
const mongoose = require('mongoose');
const config = require('./config.js');
mongoose.connect('mongodb://' +config.user+ ':' +config.pass+ '@ds151293.mlab.com:51293/hackweek', {
  useMongoClient: true
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function(){
  console.log("DB connectted");
});


var User = require('./models/user');

/* * * * * API ROUTES * * * * * */
const router = express.Router();

router.use(function(req, res, next) {
  console.log('Request received with ready state [' +db.readyState+ ']');
  next();
});

router.get('/', function(req, res){
  res.json({ message: 'hello world! '});
});

router.route('/users')
  .post(function(req, res){
    let user = new User();
    user.username = req.body.username;

    user.save(function(err){
      if(err){
        res.send(err);
      }

      res.json({ message: 'User created!' });
    });
  });


// prefix all routes with /api
app.use('/api', router);


var server = http.Server(app);
var websocket = socketio(server);

// app.listen(port);
server.listen(port, () => console.log('Listening on port ' + port + "..."));


/* * * * WEBSOCKETS FOR CHATTING * * * */

var clients = {};
var users = {};

websocket.on('connection', (socket) => {
  console.log('A client just joined on', socket.id);
});
