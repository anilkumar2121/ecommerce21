import React, { createContext, useState } from "react";

export const ShopContext = createContext("");

const ShopContextProvider = (props) => {
  const [data, setData] = useState([]);
  //const [text, setText] = useState("");

  return (
    <ShopContext.Provider value={{ data, setData }}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
