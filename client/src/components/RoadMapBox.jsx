/* eslint-disable react/prop-types */

import React from 'react';

const RoadMapBox = () => {
	const [types, setTypes] = React.useState([
		{ id: 'planned', name: 'Planned', color: '#F49F85', number: 2 },
		{ id: 'inProgress', name: 'In Progress', color: '#4461E6', number: 3 },
		{ id: 'done', name: 'Done', color: '#62B6FA', number: 1 },
	]);
	return (
    <div className="roadmap-box">
      <div className="left">
        <h3 style={{ marginLeft: 0 }}>Roadmap</h3>
        <div>
          <ul className="left-list">
            {types.map((type) => {
              return (
                <li
                  key={type.id}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "10rem",
                  }}
                >
                  <span>{type.name}</span>
                  <span>{type.number}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="right">
        <p className="view-dashboard">View</p>
        {/* <div className='right-sn'>
					{types.map((type) => {
						return (
							<div className='right-sn-item' key={type.id}>
								{type.number}
							</div>
						);
					})}
				</div> */}
      </div>
    </div>
  );
};

export default RoadMapBox;
