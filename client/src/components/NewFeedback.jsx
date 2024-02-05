import React from "react";
import classes from "./NewFeedback.module.css";
import addlogo from "./../assets/images/icon-new-feedback.svg";
import { useNavigate } from "react-router-dom";

const NewFeedback = () => {
  const feedback = {
    title: "Add a dark theme",
    id: "1",
    category: "Feature",
    details: " this is the details",
  };

  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div className={classes.total}>
      <div className={classes.backBtn}>
        <button onClick={handleBack}>{`< Go back`}</button>
      </div>
      <div className={classes.body}>
        <div>
          <img src={addlogo} alt="" />
          <h1>{`Create New Feedback`}</h1>
          <form action="">
            <div className={classes.formField}>
              <h4 htmlFor="">Feedback Title</h4>
              <label htmlFor="">Add a short, descriptive headline</label>
              <input
                type="text"
                placeholder={feedback.title}
                className={classes.titleInput}
              />
            </div>
            <div className={classes.formField}>
              <h4 htmlFor="">Category</h4>
              <label htmlFor="">Choose a category for your feedback</label>
              <select name="" id="">
                <option value="">Feature</option>
                <option value="">UI</option>
                <option value="">UX</option>
                <option value="">Enhancement</option>
                <option value="">Bug</option>
              </select>
            </div>
            <div className={classes.formField}>
              <h4 htmlFor="">Feedback Detail</h4>
              <label htmlFor="">
                Include any specific comments on what should be improved, added,
                etc
              </label>
              <input
                type="text"
                placeholder="Detail"
                className={classes.detail}
              />
            </div>
            <div className={classes.btn}>
              <div>
                {/* <button className={classes.btnDelete}>Delete</button> */}
              </div>
              <div className={classes.btn2}>
                <button className={classes.btnCancel}>Candel</button>
                <button className={classes.btnAdd}>Add Feedback</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewFeedback;
