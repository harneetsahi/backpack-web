"use client";
import { useState } from "react";
import Button from "../components/Button";
import LendBorrowCard from "../components/LendBorrowCard";
import LendTopBar from "../components/LendTopBar";

export default function Lend() {
  const [activeTab, setActiveTab] = useState("lend");
  const [activeSubTab, setActiveSubTab] = useState("1d");
  return (
    <div className="flex lg:flex-row flex-col gap-2  mx-2 overflow-x-clip">
      <div className="flex-1 flex flex-col gap-2 ">
        <LendTopBar />

        <div className="flex lg:flex-row flex-col gap-2">
          <div className="flex-1 bg-darker rounded-lg lg:w-190">
            <div className="m-4 flex justify-between ">
              <div className=" font-semibold">
                <Button
                  type="button"
                  text="Lend & Borrow info"
                  onClick={() => setActiveTab("lend")}
                  className={`${
                    activeTab === "lend" ? "bg-dark text-white" : " text-gray"
                  } py-2 px-4`}
                />
                <Button
                  type="button"
                  text="Models"
                  onClick={() => setActiveTab("model")}
                  className={`${
                    activeTab === "model" ? "bg-dark text-white" : " text-gray"
                  } py-2 px-4`}
                />
              </div>

              <div className="font-semibold">
                <Button
                  type="button"
                  text="1D"
                  onClick={() => setActiveSubTab("1d")}
                  className={`${
                    activeSubTab === "1d" ? "bg-dark text-white" : " text-gray"
                  } py-2 px-4`}
                />
                <Button
                  type="button"
                  text="1W"
                  onClick={() => setActiveSubTab("1w")}
                  className={`${
                    activeSubTab === "1w" ? "bg-dark text-white" : " text-gray"
                  } py-2 px-4`}
                />
                <Button
                  type="button"
                  text="1M"
                  onClick={() => setActiveSubTab("1m")}
                  className={`${
                    activeSubTab === "1m" ? "bg-dark text-white" : " text-gray"
                  } py-2 px-4`}
                />
                <Button
                  type="button"
                  text="1Y"
                  onClick={() => setActiveSubTab("1y")}
                  className={`${
                    activeSubTab === "1y" ? "bg-dark text-white" : " text-gray"
                  } py-2 px-4`}
                />
              </div>
            </div>
            <div className="w-full h-130  overflow-y-clip mb-4 px-1 ">
              {activeTab === "lend" ? (
                <img src="/lendborrow.png" alt="lend & borrow chart" />
              ) : (
                <img
                  src="/interestmodel.png"
                  className="px-1"
                  alt="lend & borrow chart"
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <LendBorrowCard />
    </div>
  );
}
