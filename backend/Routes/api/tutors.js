const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../../config.js");

//Load user model
const User = require("../../models/user");

// @route   GET api/tutors/subjects
// @desc    get subjects from user to populate tutor list
// @access  Public
router.post("/:id/subjects", (req, res) => {
  const { id } = req.params;
  // Check Validation
  if (!id) {
    console.log(errors);
    return res.status(400).json({
      error: "You need to set up your profile before finding tutors."
    });
  }
  User.findOne({ _id: id })
    .then(user => {
      if (!user) {
        return res
          .status(400)
          .json({ error: "Please login before finding tutors." });
      } else {
        const subjects = user.subjects;
        return res.status(200).json({ subjects });
      }
    })
    .catch(err => {
      return res
        .status(400)
        .json({ error: "Couldn't find user profile to populate tutor list." });
    });
});

module.exports = router;
