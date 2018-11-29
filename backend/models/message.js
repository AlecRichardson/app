var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MessageSchema = new Schema({
       text: String,
  createdAt: Date,
         to: String,
       from: String
});

module.exports = mongoose.model('Message', MessageSchema);
