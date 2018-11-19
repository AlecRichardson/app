const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = 3001;

/* * * * DB CONFIG * * * */
const mongoose = require('mongoose');
const config = require('./config.js');
mongoose.connect('mongodb://admin:4830hackweek@ds151293.mlab.com:51293/hackweek', {
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
  console.log('Request received!');
  console.log(mongoose.connection.readyState);
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

app.listen(port);
console.log('Listening on port ' + port + "...");
