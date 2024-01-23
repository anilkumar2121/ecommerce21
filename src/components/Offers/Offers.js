import React from "react";
import hero from "../Assets/hero.jpg";
import "./Offers.css";

const Offers = () => {
  return (
    <div>
      <div className="offers">
        <div className="offers-left">
          <h1>Exclusive</h1>
          <h1>Offers for you</h1>
          <p>ONLY ON BEST SELLER PRODUCTS</p>
          <button>Check now</button>
        </div>
        <div className="offers-right">
          <img src={hero} alt="" style={{ height: "67vh" }} />
        </div>
      </div>
    </div>
  );
};

export default Offers;
