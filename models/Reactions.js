const { Schema, Types } = require('mongoose');
const { format_date } = require('../utils/helpers')

// reaction schema only - this will be referenced from the thought model
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      get: date => format_date(date) 
    },
  },
  {
    toJSON: {
      //enables the get method above for the date createdAt
      getters: true,
    },
    id: false,
  }
);

module.exports = reactionSchema;
