const { Schema, model } = require("mongoose");
const thoughtSchema = require("./Thought");
const { ObjectId } = require("mongoose").Types;

// User schema
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  thoughts: {
    type: [thoughtSchema.ObjectId],
  },
  friends: {
    type: [Schema.ObjectId],
  },
});

// User Model
const User = model("User", userSchema);

userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

module.exports = User;
