import React from "react";
import "./Welcome.css";
import burger from "../../assets/food/burger-expload.png";

function Welcome() {
  return (
    <div className="welcome" id="welcome">
      <div className="welcome-text">
        <h2>
          Drop it like its <span className="hot">HOT</span>
        </h2>
      </div>
      <img src={burger} alt="" className="welcome-burger" />
    </div>
  );
}

export default Welcome;
