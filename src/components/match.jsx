import React from 'react';

const Match = (props) => {
  return (
    <div className="card">
      <div className="card-derscritpion">
        <div className="card-details">
          <h5>{props.name}</h5>
          <h5>{props.hour}</h5>
          <h5>{props.channel}</h5>
        </div>
        <div className="card-right">
          <p>Delete</p>
        </div>
      </div>
    </div>
  );
};

export default Match;
