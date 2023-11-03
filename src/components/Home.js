import React, { useContext } from "react";
import Banner from "./Banner";
import BestSellPro from "./BestSellPro";
import GiftSec from "./GiftSec";
import DataContext from "../context/DataContext";

const Home = () => {
  const { product } = useContext(DataContext);

  return (
    <main className="flex justify-center">
      <div className="max-w-[1400px]">
        <Banner />
        <BestSellPro product={product} />
        <GiftSec />
      </div>
    </main>
  );
};

export default Home;
