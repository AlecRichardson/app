const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const cors = require("cors");

const users = require("./routes/api/users");
const tutors = require("./routes/api/tutors");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

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

app.use("/api/users", users);
app.use("/api/tutors", tutors);

app.listen(port);
console.log("Listening on port " + port + "...");
