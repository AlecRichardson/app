var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MessageSchema = new Schema({
  text: String,
  createdAt: Date,
  userId: ObjectId,
  chatId: ObjectId
});

module.exports = mongoose.model('Message', UserSchema);
