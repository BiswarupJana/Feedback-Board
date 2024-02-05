const Reply = require("./../models/replyModel");
const factory = require("./handlerFactory");

exports.setReplyUserId = (req, res, next) => {
  if (!req.body.comment) req.body.comment = req.params.commentId;
  //   if (!req.body.user) req.body.user = req.user.id;

  next();
};

exports.getAllReply = factory.getAll(Reply);
exports.getReply = factory.getOne(Reply);
exports.createReply = factory.createOne(Reply);
exports.updateReply = factory.updateOne(Reply);
exports.deleteReply = factory.deleteOne(Reply);
