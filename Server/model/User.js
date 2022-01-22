const mongoose = require("mongoose");
const user = new mongoose.Schema({
  username: {type: String, unique: true, required: true},
  password: {type: String, required: true},
  email: {type: String, unique: true, required: true},
  FC: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Collection"
    }
  ],
  FUsers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user"  
    }
  ],
  Liked: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Blog"
    }
  ]
});

module.exports = mongoose.model("User", user);