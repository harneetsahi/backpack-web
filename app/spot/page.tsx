"use client";
import Button from "../components/Button";
import SpotTopBar from "../components/SpotTopBar";
import SpotChart from "../components/SpotChart";
import SpotChartSideCard from "../components/ChartSideCard";
import BuySellCard from "../components/BuySellCard";
import { useState } from "react";

const activeStyles = "bg-dark text-white";
const inactiveStyles = "text-gray";

export default function Spot() {
  const [active, setActive] = useState("chart");

  return (
    <div className="flex lg:flex-row flex-col gap-2 mx-2 overflow-x-clip ">
      <div className="flex-1 flex flex-col gap-2 ">
        <SpotTopBar />

        <div className="flex lg:flex-row flex-col gap-2">
          <div className="flex-1 bg-darker  rounded-lg lg:w-190">
            <div className="m-4">
              <Button
                type="button"
                text="Chart"
                onClick={() => setActive("chart")}
                className={`${
                  active === "chart" ? activeStyles : inactiveStyles
                } py-2 px-4 text-sm font-semibold`}
              />
              <Button
                type="button"
                text="Depth"
                onClick={() => setActive("depth")}
                className={`${
                  active === "depth" ? activeStyles : inactiveStyles
                } py-2 px-4 text-sm font-semibold`}
              />
              <Button
                type="button"
                text="Margin"
                onClick={() => setActive("margin")}
                className={`${
                  active === "margin" ? activeStyles : inactiveStyles
                } py-2 px-4 text-sm font-semibold`}
              />
            </div>
            <div className="lg:w-190 h-138  overflow-y-clip mb-4 px-4 w-full ">
              {active === "chart" && <SpotChart />}
              {active === "depth" && (
                <div>
                  <img src="/spotDepth.png" alt="" />
                </div>
              )}
              {active === "margin" && (
                <div>
                  <img src="/spotMargin.png" alt="" />
                </div>
              )}
            </div>
          </div>

          <SpotChartSideCard />
        </div>
      </div>
      <BuySellCard />
    </div>
  );
}
