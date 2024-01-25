import React from "react";
import "./BreadCrum.css";
import arrow from "../asss/Assets/arrow.png";

const BreadCrum = (props) => {
  const { product } = props;
  // const product = props.product
  return (
    <div>
      <div className="breadcrum">
        HOME <img src={arrow} alt="" style={{color:"black"}}  /> SHOP <img src={arrow} alt="" />
        {product?.category} <img src={arrow} alt="" />
        {product?.name}
      </div>
    </div>
  );
};

export default BreadCrum;
