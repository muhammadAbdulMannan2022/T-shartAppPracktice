import React from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const products = useLoaderData();
  console.log(products);
  return (
    <div>
      <h1>home</h1>
    </div>
  );
};

export default Home;
