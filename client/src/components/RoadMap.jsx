import React from "react";
import classes from "./RoadMap.module.css";
import commentLogo from "./../assets/images/icon-comments.svg";
import { useNavigate } from "react-router-dom";

const RoadMap = () => {
  const allFeedback = [
    {
      title: "first feedback",
      category: "Feature",
      details: "this is the first feedback",
      status: "Planned",
      id: "65bd2ab9ee48da8efde94522",
      comments: [
        {
          _id: "65bf5e2271a2d8d048bcecc8",
          comment: "my fist comment",
          feedback: "65bd2ab9ee48da8efde94522",
          createdAt: "2024-02-04T09:51:30.250Z",
          __v: 0,
          id: "65bf5e2271a2d8d048bcecc8",
        },
        {
          _id: "65bf5e2271a2d8d048bcecc8",
          comment: "my fist comment",
          feedback: "65bd2ab9ee48da8efde94522",
          createdAt: "2024-02-04T09:51:30.250Z",
          __v: 0,
          id: "65bf5e2271a2d8d048bcecc8",
        },
        {
          _id: "65bf5e2271a2d8d048bcecc8",
          comment: "my fist comment",
          feedback: "65bd2ab9ee48da8efde94522",
          createdAt: "2024-02-04T09:51:30.250Z",
          __v: 0,
          id: "65bf5e2271a2d8d048bcecc8",
        },
      ],
    },
    {
      title: "first feedback",
      category: "Feature",
      details: "this is the first feedback",
      status: "Planned",
      id: "65bd2ab9ee48da8efde94522",
      comments: [
        {
          _id: "65bf5e2271a2d8d048bcecc8",
          comment: "my fist comment",
          feedback: "65bd2ab9ee48da8efde94522",
          createdAt: "2024-02-04T09:51:30.250Z",
          __v: 0,
          id: "65bf5e2271a2d8d048bcecc8",
        },
        {
          _id: "65bf5e2271a2d8d048bcecc8",
          comment: "my fist comment",
          feedback: "65bd2ab9ee48da8efde94522",
          createdAt: "2024-02-04T09:51:30.250Z",
          __v: 0,
          id: "65bf5e2271a2d8d048bcecc8",
        },
        {
          _id: "65bf5e2271a2d8d048bcecc8",
          comment: "my fist comment",
          feedback: "65bd2ab9ee48da8efde94522",
          createdAt: "2024-02-04T09:51:30.250Z",
          __v: 0,
          id: "65bf5e2271a2d8d048bcecc8",
        },
      ],
    },
  ];
  const navigate = useNavigate();

  const handleAddFeedback = () => {
    navigate("/addFeedback");
  };
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div className={classes.total}>
      <div className={classes.body}>
        <nav>
          <div>
            <button className={classes.btnBack}>
              <b onClick={handleBack}>{`<Go Back`}</b>
            </button>
            <h2>Roadmap </h2>
          </div>
          <button
            className={classes.btnAdd}
            onClick={handleAddFeedback}
          >{`+ Add Feedback`}</button>
        </nav>
      </div>

      <div className={classes.mainBody}>
        <div className={classes.mainBodyRow}>
          <h2>Planned({`2`})</h2>
          <p>Ideas prioritized for research</p>
          {allFeedback.map((item, index) => (
            <div key={index} className={classes.plannedBox}>
              <p>{`Planned`}</p>
              <h2>{item.title}</h2>
              <p>{item.details}</p>
              <div>{item.category}</div>
              <div>
                {`123`}
                <div>
                  <img src={commentLogo} alt="" />
                  {item.comments.length}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={classes.mainBodyRow}>
          <h2>In-Progress({`2`})</h2>
          <p>Currently being developed</p>
          {allFeedback.map((item, index) => (
            <div key={index} className={classes.inProcessBox}>
              <p>{`Planned`}</p>
              <h2>{item.title}</h2>
              <p>{item.details}</p>
              <div>{item.category}</div>
              <div>
                {`123`}
                <div>
                  <img src={commentLogo} alt="" />
                  {item.comments.length}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={classes.mainBodyRow3}>
          <h2>Live({`1`})</h2>
          <p>Released features</p>
          {allFeedback.map((item, index) => (
            <div key={index} className={classes.liveBox}>
              <p>{`Planned`}</p>
              <h2>{item.title}</h2>
              <p>{item.details}</p>
              <div>{item.category}</div>
              <div>
                {`123`}
                <div>
                  <img src={commentLogo} alt="" />
                  {item.comments.length}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
