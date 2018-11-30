const express = require("express");
const router = express.Router();

//Load user model
const Message = require("../../models/message");

// @route   GET api/tutors/gettutors
// @desc    get tutors matching users subject list
// @access  Public
router.get("/getmessages", (req, res) => {
  const user1 = req.query.user1;
  const user2 = req.query.user2;
  // Check Validation
  if (!user1 || !user2) {
    return res.status(400).json({
      error: "No users to find messages."
    });
  }
  Message.find()
    .then(messages => {

      let chats = messages.filter(message => {
        if(message.to === user1 && message.from === user2){
          return true;
        }

        if(message.to === user2 && message.from === user1){
          return true;
        }

        return false;
      });

      if (!chats) {
        return res
          .status(200)
          .json({ error: "No messages between users." });
      } else {
        console.log("chats: ", chats);
        return res.status(200).json({ chats });
      }
    })
    .catch(err => {
      return res
        .status(400)
        .json({ error: "No messages matching input." });
    });
});

module.exports = router;
