const express = require("express");
const feedbackController = require("../controllers/feedbackController");
const commentRouter = require("./commentRoutes");

const router = express.Router();

router.use("/:feedbackId/comments", commentRouter);

router
  .route("/")
  .get(feedbackController.getAllFeedback)
  .post(feedbackController.createFeedback);

router
  .route("/:id")
  .get(feedbackController.getFeedback)
  .patch(feedbackController.updateFeedback)
  .delete(feedbackController.deleteFeedback);

module.exports = router;
