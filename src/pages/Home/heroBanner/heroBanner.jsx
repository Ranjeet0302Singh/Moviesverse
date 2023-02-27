import React from "react";
import "./heroBanner.scss";
const heroBanner = () => {
  return (
    <div className="heroBanner">
      <div className="wrapper">
        <div className="heroBannnerContent">
          <span className="title">Welcome</span>
          <span className="subtitle">
            Millones of movies , TV shows and people to discover. 
            Explore now.
          </span>
        </div>
      </div>
    </div>
  );
};

export default heroBanner;
