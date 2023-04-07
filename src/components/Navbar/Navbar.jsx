import React from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, ShoppingCartIcon } from "@heroicons/react/24/solid";

const Navbar = ({ handleCartIsOpen, handleNavIsOpen, navIsOpen }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "gray",
        padding: "0 5%",
      }}
      className="h-12 sticky top-0 z-10 shadow"
    >
      <div className="logo">
        <Link style={{ color: "#fff", textDecoration: "none" }} to="/">
          <h1>T-Shirt</h1>
        </Link>
      </div>
      <div className="flex gap-3">
        <div
          style={{ background: "gray" }}
          className={`
          flex
          md:flex
          md:flex-row
          gap-3
          w-full
          h-fit
          flex-col
          ${navIsOpen ? "absolute md:static top-12 right-0" : `hidden md:block`}
          `}
        >
          <Link to="/">Home</Link>
          <Link to="/review">review</Link>
        </div>
        <div className="flex gap-3">
          <Bars3Icon
            onClick={handleNavIsOpen}
            className="w-6 h-6  md:hidden hover:cursor-pointer"
          />
          <ShoppingCartIcon
            onClick={handleCartIsOpen}
            className="w-6 h-6 hover:cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
