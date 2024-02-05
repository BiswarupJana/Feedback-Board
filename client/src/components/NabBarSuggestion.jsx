import React from 'react';
import bulb from './images/bulb.svg';
import './rightSection.css';
import { useNavigate } from "react-router-dom";

const NabBarSuggestion = () => {
  const [values, setValues] = React.useState("");
  const handleChange = (value) => {
    setValues(value);
  };
  // const options = [

  // 	{
  // 		id: 'Most Upvotes',
  // 		name: 'Most Upvotes',
  // 		value: 'Most Upvotes',
  // 	},
  // 	{ id: 'Least Upvotes', name: 'Least Upvotes', value: 'Least Upvotes' },
  // 	{
  // 		id: 'Most Comments',
  // 		name: 'Most Comments',
  // 		value: 'Most Comments',
  // 	},
  // 	{
  // 		id: 'Least Comments',
  // 		name: 'Least Comments',
  // 		value: 'Least Comments',
  // 	},
  // ];

  const navigate = useNavigate();
  const handleAddFeedback = () => {
    navigate("/addFeedback");
  };

  return (
    <nav className="navbar-suggestion">
      <img src={bulb} alt="bulb" width="25px" height="25px" />
      <h2 className="nav-header">6 Suggestions</h2>
      <div className="select-div">
        <p style={{ marginRight: "0.5rem", fontSize: "16px" }}>Sort by</p>
        <select onChange={(value) => handleChange(value)}>
          <option value="Most Upvotes">Most Upvotes</option>
          <option value="Least Upvotes">Least Upvotes</option>
          <option value="Most Comments">Most Comments</option>
          <option value="Least Comments">Least Comments</option>
        </select>
      </div>

      <button className="nav-button" onClick={handleAddFeedback}>
        +Add Feedback
      </button>
      <div>{console.log(values)}</div>
    </nav>
  );
};

export default NabBarSuggestion;
