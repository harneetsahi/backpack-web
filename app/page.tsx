"use client";

import Card from "./components/Card";
import DetailedCard from "./components/DetailedCard";
import MobileView from "./components/MobileView";
import Navbar from "./components/Navbar";
import { newCoins, popularCoins, topCoins } from "./data/cardData";

export default function Home() {
  return (
    <>
      <MobileView />
      <div className="hidden sm:block">
        <Navbar />
      </div>

      <div className=" flex justify-center items-center mx-5">
        <div className=" flex flex-col gap-5 max-w-306  w-full ">
          <div className="h-90 rounded-lg  border-1">image slider</div>

          <div className="mt-5 flex gap-4 justify-between w-full">
            <Card title="New" children={newCoins} />
            <Card title="Top Gainers" children={topCoins} />
            <Card
              className="hidden md:block"
              title="Popular"
              children={popularCoins}
            />
          </div>

          <DetailedCard />
        </div>
      </div>
    </>
  );
}
