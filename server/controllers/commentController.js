const Comment = require("./../models/commentModel");
const factory = require("./handlerFactory");

exports.setFeedbackUserIds = (req, res, next) => {
  if (!req.body.feedback) req.body.feedback = req.params.feedbackId;
  //   if (!req.body.user) req.body.user = req.user.id;
  next();
};

exports.getAllComments = factory.getAll(Comment);
exports.getComment = factory.getOne(Comment, { path: "replys" });
exports.createComment = factory.createOne(Comment);
exports.updateComment = factory.updateOne(Comment);
exports.deleteComment = factory.deleteOne(Comment);
