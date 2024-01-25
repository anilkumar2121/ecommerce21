import React, { createContext, useState } from "react";
import all_product from "../components/asss/Assets/all_product";
export const ShopContext = createContext("");

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length+1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [data, setData] = useState([]);

  const [cartItem, setCartItem] = useState(getDefaultCart());


  const addToCart =(itemId)=>{
    setCartItem((prev) =>({...prev,[itemId]:prev[itemId]+1}))

    console.log("cartItems" ,cartItem)
  }

  const removeFromCart =(itemId)=>{
    setCartItem((prev) =>({...prev,[itemId]:prev[itemId]-1}))
  }
  //const [text, setText] = useState("");

  console.log("cartItem", cartItem);

  const total ={ data, setData, setCartItem,addToCart, removeFromCart}

  return (
    <ShopContext.Provider value={total}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
