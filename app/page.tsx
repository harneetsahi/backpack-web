import Card from "./components/Card";
import DetailedCard from "./components/DetailedCard";
import ImageCarousel from "./components/ImageCarousel";

import { newCoins, popularCoins, topCoins } from "./data/cardData";

export default function Home() {
  return (
    <>
      <div className=" flex justify-center items-center mx-5">
        <div className=" flex flex-col gap-5 max-w-306  w-full ">
          <div className=" w-full ">
            <ImageCarousel />
          </div>

          <div className=" flex gap-4 justify-between w-full">
            <Card title="New" coins={newCoins} />
            <Card title="Top Gainers" coins={topCoins} />
            <Card
              className="hidden md:block"
              title="Popular"
              coins={popularCoins}
            />
          </div>

          <DetailedCard />
        </div>
      </div>
    </>
  );
}
