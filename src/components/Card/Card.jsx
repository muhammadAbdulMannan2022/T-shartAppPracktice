import React from "react";
import { useContext } from "react";
import { TheTrueContext } from "../../App";
const Card = ({ title, imageSrc, price, product }) => {
  const handleAddToCart = useContext(TheTrueContext);
  // console.log(data);
  return (
    <div className="bg-black shadow-md rounded-lg p-4">
      <img src={imageSrc} alt={title} className="w-full mb-4 h-2/3" />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-white">price : ${price}</p>
      <button
        onClick={() => handleAddToCart(product)}
        className="mt-4 bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Card;
