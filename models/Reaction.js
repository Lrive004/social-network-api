const { Schema } = require("mongoose");
// const objectId = mongoose.Types.objectId();

const reactionSchema = new Schema({
  reactionId: {
    // type: objectId,
    // default: () => new objectId(),
  },
  reactionBody: {
    type: String,
    required: true,
    max_length: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    // get: (date) => timeSince(date),
  },
});

module.exports = reactionSchema;
