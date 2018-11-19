var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: String,
  pass: String,
  userType: String,
});

module.exports = mongoose.model('User', UserSchema);
