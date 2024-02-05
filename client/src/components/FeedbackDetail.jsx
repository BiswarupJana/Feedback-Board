import { useState } from "react";
import classes from "./FeedbackDetail.module.css";
import logo from "../logo.svg";
import { useNavigate } from "react-router-dom";

const FeedbackDetail = () => {
  const [selectedCommentId, setSelectedCommentId] = useState(null);
  const [reply, setReply] = useState([]);
  const [replyBoxes, setReplyBoxes] = useState({});
  const navigate = useNavigate();

  const handleEditFeedback = () => {
    navigate("/feedbackEdit");
  };
  const handleBack = () => {
    navigate(-1);
  };
  const comments = [
    {
      _id: "1",
      comment:
        "Hello ..... ...... .... ... .. . . . . . .... ..... .... ... .. ... ... ... .... ....",
      user: "user 1",
    },
    {
      _id: "2",
      comment:
        "Hello ..... ...... .... ... .. . . . . . .... ..... .... ... .. ... ... ... .... ....",
      user: "user 1",
    },
    {
      _id: "3",
      comment:
        "Hello ..... ...... .... ... .. . . . . . .... ..... .... ... .. ... ... ... .... ....",
      user: "user 1",
    },
    {
      _id: "4",
      comment:
        "Hello ..... ...... .... ... .. . . . . . .... ..... .... ... .. ... ... ... .... ....",
      user: "user 1",
    },
    {
      _id: "5",
      comment:
        "Hello ..... ...... .... ... .. . . . . . .... ..... .... ... .. ... ... ... .... ....",
      user: "user 1",
    },
    {
      _id: "6",
      comment:
        "Hello ..... ...... .... ... .. . . . . . .... ..... .... ... .. ... ... ... .... ....",
      user: "user 1",
    },
  ];

  const replyInit = [
    {
      commentId: "1",
      reply: "my reply my reply .....",
      user: "user 1",
    },
    {
      commentId: "1",
      reply: "my reply my reply .....",
      user: "user 1",
    },
    {
      commentId: "2",
      reply: "my reply my reply .....",
      user: "user 2",
    },
    {
      commentId: "3",
      reply: "my reply my reply .....",
      user: "user 3",
    },
    {
      commentId: "4",
      reply: "my reply my reply .....",
      user: "user 4",
    },
  ];

  const replyShowHandler = (commentId) => {
    setSelectedCommentId(commentId);
    const filteredReplies = replyInit.filter(
      (item) => item.commentId === commentId
    );
    setReply(filteredReplies);

    setReplyBoxes((prevBoxes) => ({
      ...prevBoxes,
      [commentId]: !prevBoxes[commentId],
    }));
    console.log(commentId);
  };

  return (
    <div className={classes.total}>
      <nav className={classes.nav}>
        <button
          className={classes.goBackBtn}
          onClick={handleBack}
        >{`< Go Back`}</button>
        <button
          className={classes.editFeedbackBtn}
          onClick={handleEditFeedback}
        >
          Edit Feedback
        </button>
      </nav>
      <div className={classes.body}>
        <div className={classes.feedbackBody}>
          <button>{`99`}</button>
          <div className={classes.feedbackContent}>
            <h2>{`Add a Dark Theme option`}</h2>
            <p>{`Description`}</p>
            <p>{"Feature"}</p>
          </div>
          {`4`}
        </div>
        <div className={classes.commentsBody}>
          {`${comments.length} Comments`}
          {comments.map((item) => (
            <div key={item._id}>
              <div style={{ alignItems: "center" }}>
                <div className={classes.commentHead}>
                  <div className={classes.user}>
                    <img src={logo} alt="" width="10%" />
                    <div>
                      <h3>{item.user}</h3>
                      <div>{item.comment}</div>
                    </div>
                  </div>
                  <button
                    className={`${classes.replyBtn} ${
                      selectedCommentId === item._id ? "active" : ""
                    }`}
                    onClick={() => replyShowHandler(item._id)}
                  >
                    Reply
                  </button>
                </div>
                <div className={classes.line}></div>
              </div>
              {selectedCommentId === item._id &&
                reply.map((replyItem, replyIndex) => (
                  <div className={classes.replyHead} key={replyIndex}>
                    <div className={classes.user}>
                      <img src={logo} alt="" width="10%" />
                      <div>
                        <h3>{replyItem.user}</h3>
                        <div>{replyItem.reply}</div>
                      </div>
                    </div>
                    <button
                      onClick={() =>
                        replyBoxes[item._id]
                          ? setReplyBoxes({
                              ...replyBoxes,
                              [item._id]: false,
                            })
                          : setReplyBoxes({
                              ...replyBoxes,
                              [item._id]: true,
                            })
                      }
                      className={classes.replyBtn}
                    >
                      Reply
                    </button>
                  </div>
                ))}
              {replyBoxes[item._id] && (
                <div className={classes.replyBody}>
                  <input type="text" placeholder="Type your reply here" />
                  <button>Post Reply</button>
                </div>
              )}
            </div>
          ))}
        </div>
        <div>
          <div className={classes.addCommentBody}>
            <div>
              <h3 className={classes.addCommentHead}>Add Comment</h3>
              <input type="text" placeholder="Type your comment here" />
            </div>
            <div className={classes.addCommentBtn}>
              {`${250} Characters left`}
              <button>Post Comment</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackDetail;
