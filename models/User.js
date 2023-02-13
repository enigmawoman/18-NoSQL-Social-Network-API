const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
  {
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
      match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'Must match an email address format'],
    },

    // both thought model and the users friends are referenced via their _id's
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  {

    toJSON: {
      // enables virtuals
      virtuals: true,
    },
    id: false,
  }
);
// setting up a virtual for counting the friends a user has
userSchema.virtual('friendCount')
.get(function () {
  return this.friends.length;
});

const User = model('User', userSchema);

module.exports = User;
