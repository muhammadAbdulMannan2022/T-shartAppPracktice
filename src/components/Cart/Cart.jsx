import React from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { TheTrueContext } from "../../App";

const Cart = ({ isOpen, cartData, handleRemoveFromCart }) => {
  // const data = useContext(TheTrueContext);
  // console.log(data);
  return (
    <div
      className={`fixed z-5 top-0 left-0 w-full h-full bg-black bg-opacity-90 ${
        isOpen ? "flex" : "hidden"
      } items-center justify-center overflow-hidden transition-all duration-300 ease-in`}
    >
      <div
        style={{ background: "gray" }}
        className={`absolute top-12 ${
          isOpen ? "right-0" : "right-full"
        } w-full md:w-1/3 h-full flex flex-col gap-2 py-4`}
      >
        <h1 className="underline">Cart summary</h1>
        <hr className="mt-3" />
        <hr className="mb-3" />
        {cartData.length !== 0 ? (
          cartData.map((cartItem) => (
            <SCart
              handleRemoveFromCart={handleRemoveFromCart}
              key={cartItem._id}
              cartItem={cartItem}
            ></SCart>
          ))
        ) : (
          <h1>Nothing in cart</h1>
        )}
      </div>
    </div>
  );
};
const SCart = ({ cartItem, handleRemoveFromCart }) => {
  const { _id, name, picture, price, index } = cartItem;
  return (
    <div className="w-full px-2">
      <div className="bg-slate-400 flex items-center gap-3">
        <div className="w-1/4">
          <img className="w-full" src={picture} alt={name} />
        </div>
        <div className="w-3/4 flex justify-between">
          <div className="detail text-start">
            <p>{name}</p>
            <p>price : ${price}</p>
            <p>quantity : {index}</p>
          </div>
          <div className="flex items-center pe-4">
            <button
              onClick={() => handleRemoveFromCart(_id)}
              className="bg-slate-700 p-2 rounded-full"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
