const mongoose = require("mongoose");
const slugify = require("slugify");
const Feedback = require("./feedbackModel");

const commentSchema = new mongoose.Schema(
  {
    comment: {
      type: String,
      required: [true, ` Comment field can't be empty`],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    feedback: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Feedback",
      required: [true, ` Comment must belong to a feedback`],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

commentSchema.virtual("replys", {
  ref: "Reply",
  foreignField: "comment",
  localField: "_id",
});

const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;
