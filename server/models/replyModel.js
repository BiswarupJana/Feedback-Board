const mongoose = require("mongoose");
const Comment = require("./commentModel");
const slugify = require("slugify");

const replySchema = new mongoose.Schema(
  {
    reply: {
      type: String,
      required: [true, `Field can't be empty`],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    comment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
      required: [true, `Field can't be empty`],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Reply = mongoose.model("Reply", replySchema);
module.exports = Reply;
