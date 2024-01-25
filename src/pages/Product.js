import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import BreadCrum from "../components/BreadCrum/BreadCrum";
import ProductDisplay from "../components/ProductDisplay";
import DescriptionBox from "../components/DescriptionBox/DescriptionBox";
import RelatedProducts from "../components/DescriptionBox/RelatedProducts/RelatedProducts";

const Product = () => {
  const { data } = useContext(ShopContext);

  const { productId } = useParams();

  const product = data.find((e) => e.id === Number(productId));
 

  return (
    <div>
      <BreadCrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  );
};

export default Product;
