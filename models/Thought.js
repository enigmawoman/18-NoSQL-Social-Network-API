const { Schema, model } = require('mongoose');

// Schema to create a course model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,

    },
    inPerson: {
      type: Boolean,
      default: true,
    },
   
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    username: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

UserSchema.virtual("createdAtDisplay").get(function () {
  return this.createdAt.toLocaleString();
});

const Course = model('course', courseSchema);

module.exports = Course;
