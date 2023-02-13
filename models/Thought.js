const { Schema, model } = require('mongoose');
//require the reactionschema
const reactionSchema = require('./Reactions')
// helper for setting the format for the date in createdAt
const { format_date } = require('../utils/helpers')

// Schema to create a thought model
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
      //enables the get method above for the date createdAt
      getters: true,
      // enables virtuals for the reactions count below
      virtuals: true,
    },
    id: false,
  }
);
// setting up a virtual for counting the number of reactions on a thought
thoughtSchema
  .virtual('getReactions')
  // Getter
  .get(function () {
    return this.reactions.length;
  });

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
