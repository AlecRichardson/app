var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "Users"
  },
  subjects: [String]
});

module.exports = mongoose.model("Profile", ProfileSchema);
