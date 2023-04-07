import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "gray",
        padding: "0 5%",
      }}
    >
      <div className="logo">
        <Link style={{ color: "#fff", textDecoration: "none" }} to="/">
          <h1>T-Shirt</h1>
        </Link>
      </div>
      <div style={{ display: "flex", gap: "10px" }} className="navLinks">
        <Link to="/">Home</Link>
        <Link to="/review">review</Link>
      </div>
    </div>
  );
};

export default Navbar;
