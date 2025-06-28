"use client";

import { useState } from "react";
import SpotCard from "./SpotCard";
import FuturesCard from "./FuturesCard";
import LendCard from "./LendCard";
import Button from "./Button";

const activeStyles = "bg-dark text-white";
const inactiveStyles = "text-gray";

function DetailedCard() {
  const [activeTab, setActiveTab] = useState("spot");

  const renderCard = () => {
    switch (activeTab) {
      case "spot":
        return <SpotCard />;
      case "futures":
        return <FuturesCard />;
      case "lend":
        return <LendCard />;
    }
  };

  return (
    <>
      <div className={` bg-darker pb-5 rounded-lg w-full px-5`}>
        <div className="flex gap-2 my-3.5 font-bold text-[14px]">
          <Button
            type="button"
            text="Spot"
            onClick={() => setActiveTab("spot")}
            className={`${
              activeTab === "spot" ? activeStyles : inactiveStyles
            } py-2 px-4`}
          />
          <Button
            type="button"
            text="Futures"
            onClick={() => setActiveTab("futures")}
            className={`${
              activeTab === "futures" ? activeStyles : inactiveStyles
            } py-2 px-4`}
          />
          <Button
            type="button"
            text="Lend"
            onClick={() => setActiveTab("lend")}
            className={`${
              activeTab === "lend" ? activeStyles : inactiveStyles
            } py-2 px-4`}
          />
        </div>

        {renderCard()}
      </div>
    </>
  );
}

export default DetailedCard;
