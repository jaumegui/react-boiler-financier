import React from 'react';

const Match = (props) => {
  return (
    <div className="card-product">
      <img src="http://www.allomatch.com/images/progmatch/sports/8827c4ff2d59eac08ef07ab3a5fe5931.png"/>
      <div className="card-product-infos">
        <h4>{props.name}</h4>
        <h5>{props.hour}</h5>
        <h5>{props.channel}</h5>
      </div>
      <div className="card-right">
        <p>Delete</p>
      </div>
    </div>
  );
};

export default Match;
