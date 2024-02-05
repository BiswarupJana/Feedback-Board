const Feedback = require("../models/feedbackModel");
const factory = require("./handlerFactory");
const catchAsync = require("../utils/catchAsync");

exports.getAllFeedback = factory.getAll(Feedback, { path: "comments" });
exports.getFeedback = factory.getOne(Feedback, { path: "comments" });
exports.createFeedback = factory.createOne(Feedback);
exports.updateFeedback = factory.updateOne(Feedback);
exports.deleteFeedback = factory.deleteOne(Feedback);
