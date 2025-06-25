"use client";

import Card from "./components/Card";
import DetailedCard from "./components/DetailedCard";
import Footer from "./components/Footer";
import ImageCarousel from "./components/ImageCarousel";
import MobileView from "./components/MobileView";
import Navbar from "./components/Navbar";
import { newCoins, popularCoins, topCoins } from "./data/cardData";

export default function Home() {
  return (
    <>
      <MobileView />
      <div className="hidden sm:block">
        <Navbar />

        <div className=" flex justify-center items-center mx-5">
          <div className=" flex flex-col gap-5 max-w-306  w-full ">
            <div className=" w-full ">
              <ImageCarousel />
            </div>

            <div className=" flex gap-4 justify-between w-full">
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

        <Footer />
      </div>
    </>
  );
}
