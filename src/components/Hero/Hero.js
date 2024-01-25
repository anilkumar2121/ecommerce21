import React from "react";
import "./Hero.css";
import handIcon from "../asss/Assets/hand_icon.png";
import heroine from  "../asss/Assets/hero_image.png";

const Hero = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero-left">
          <h2>New arrivals Only</h2>
          <div>
            <div className="hero-hand-icon">
              <p>new</p>
              <img src={handIcon} alt="" height="25px" width="25px" />
            </div>
            <p>Collections</p>
            <p>for everyone</p>
          </div>
          <div className="hero-latest-button">
            <p>Latest Collections</p>
            {/* <img src={}  alt="" /> */}
          </div>
        </div>
        <div className="hero-right">
          <img style={{ height: "100vh" }} src={heroine} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
