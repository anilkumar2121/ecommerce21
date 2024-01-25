import React, { useContext } from "react";
import "./ProductDisplay.css";
import star from "../components/asss/Assets/star_icon.png";
import stardull from "../components/asss/Assets/star_dull_icon.png";
import { ShopContext } from "../context/ShopContext";
const ProductDisplay = (props) => {
  const {product} = props;

  const {addToCart} =useContext(ShopContext)

    
  return (
    <div>
      <div className="productDisplay">
        <div className="productDisplay-left">
          <div className="productDisplay-img-list">
            <img src={product?.image} alt="" />
            <img src={product?.image} alt="" />
            <img src={product?.image} alt="" />
            <img src={product?.image} alt="" />
          </div>
          <div className="productDisplay-img">
            <img
              className="productDisplay-main-img"
              src={product?.image}
              alt=""
            />
          </div>
        </div>
        <div className="productDisplay-right">
          <h1>{product?.name}</h1>
          <div className="productDisplay-right-start">
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={stardull} alt="" />
            <p>122</p>
          </div>
          <div className="productDisplay-right-prices">
            <div className="productDisplay-right-price-old">
                ${product. old_price}
            </div>
            <div className="productDisplay-right-new-old">
                ${product. new_price}
            </div>
          </div>
          <div className="productDisplay-right-size">
            <h1>Select Size</h1>
            <div className="productDisplay-right-sizes">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
            <button onClick={()=> {addToCart(product.id)}}>ADD TO CART</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
