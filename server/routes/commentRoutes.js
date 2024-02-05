const express = require("express");
const commentController = require("../controllers/commentController");
const replyRouter = require("./replyRouter");

const router = express.Router({ mergeParams: true });
router.use("/:commentId/replys", replyRouter);

router
  .route("/")
  .get(commentController.getAllComments)
  .post(commentController.setFeedbackUserIds, commentController.createComment);

router
  .route("/:id")
  .get(commentController.getComment)
  .patch(commentController.updateComment)
  .delete(commentController.deleteComment);

module.exports = router;
