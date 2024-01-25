import React from "react";
import "./NewCollection.css";
import data from "../asss/Assets/all_product";
import Item from "../item/Item";

const NewCollection = () => {
  return (
    <div>
      <div className="new-collection">
        <h1>NEW COLLECTION</h1>
        <hr />
        <div className="collection">
          {data.map((item, i) => {
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
          })}
        </div>
      </div>
    </div>
  );
};

export default NewCollection;
