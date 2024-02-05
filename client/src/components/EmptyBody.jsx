// import React from 'react';
import EmptyBg from './images/EmptybgImg.svg';
import './rightSection.css';
import { useNavigate } from "react-router-dom";

const EmptyBody = () => {
  const navigate = useNavigate();
  const handleAddFeedback = () => {
    navigate("/addFeedback");
  };

  return (
    <div className="empty-body">
      <img src={EmptyBg} alt="empty-img" width="20%" className="right-img" />
      <h2 className="empty-h">There is no feedback yet.</h2>
      <p className="empty-p">
        Got a suggestion? Found a bug that needs to be squashed? We love hearing
        new ideas about improving our app
      </p>

      <button className="nav-button" onClick={handleAddFeedback}>
        + Add FeedBack
      </button>
    </div>
  );
};

export default EmptyBody;
