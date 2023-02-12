const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reactions')
const { format_date } = require('../utils/helpers')

// Schema to create a course model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: "You must leave a thought to post",
      minlength: 1,
      maxlength: 280,

    },
    createdAt: {
      type: Date,
      default: Date.now(),
      get: date => format_date(date) 
    },
    username: {
      type: String,
      required: true
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
    id: false,
  }
);

thoughtSchema
  .virtual('getReactions')
  // Getter
  .get(function () {
    return this.reactions.length;
  });

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
