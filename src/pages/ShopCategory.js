import React, { useContext, useEffect } from "react";
import "./ShopCategory.css";
import { ShopContext } from "../context/ShopContext";
import dropdown from "../components/Assets/dropdown.png";
import Item from "../components/item/Item";
import all_products from "../components/Assets/AllProduct";

const ShopCategory = (props) => {
  const { data, setData } = useContext(ShopContext);

  // useEffect(() => {
  //   setData(all_products);
  // }, []);

  console.log("data", data);

  return (
    <div>
      <div className="shop-category">
        <img src={props.banner} alt="" />
        <div className="shopcategory-indexsort">
          <p>
            <span>showing 1-12</span> out of 36
          </p>
          <div className="shopcategory-sort">
            sort by <img src={dropdown} alt="" />
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
    </div>
  );
};

export default ShopCategory;
