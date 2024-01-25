import React, { useContext, useEffect } from "react";
import "./ShopCategory.css";
import { ShopContext } from "../context/ShopContext";
import dropdown from "../components/asss/Assets/dropdown_icon.png";
import Item from "../components/item/Item";
import all_products from "../components/asss/Assets/all_product";

const ShopCategory = (props) => {
  const { data, setData } = useContext(ShopContext);

  console.log("dataaa",data)

  useEffect(() => {
    setData(all_products);
  }, []);

  console.log("data", data);

  return (
    <div>
      <div className="shop-category">
        <img className="shopcategory-banner" src={props.banner} alt="" />
        <div className="shopcategory-indexsort">
          <p>
            <span>showing 1-12</span> out of 36
          </p>
          <div className="shopcategory-sort">
            sort by <img src={dropdown} alt="" height="10px" />
          </div>
        </div>
      </div>
      <div className="shopcategory-products">
        {data?.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore ">
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;
