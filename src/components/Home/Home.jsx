import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../Card/Card";
import { TheTrueContext } from "../../App";

const Home = () => {
  const products = useLoaderData();
  const data = useContext(TheTrueContext);
  // console.log(data);
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-1 m-8">
      {products.map((product) => {
        const { _id, name, picture, price } = product;
        return (
          <Card
            key={_id}
            product={product}
            title={name}
            imageSrc={picture}
            price={price}
          />
        );
      })}
    </div>
  );
};

export default Home;
