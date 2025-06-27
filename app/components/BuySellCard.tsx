"use client";
import { useState } from "react";
import Button from "./Button";
import { ChevronDown } from "lucide-react";
import InputEl from "./InputEl";
import Link from "next/link";

function BuySellCard() {
  const [activeTab, setActiveTab] = useState("Buy");
  const [activeSubTab, setActiveSubTab] = useState("Limit");
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionChange = (optionId: string) => {
    setSelectedOption((prev) => (prev === optionId ? null : optionId));
  };

  return (
    <>
      <div
        className={` flex flex-col  overflow-hidden   bg-darker pb-5 rounded-lg px-5 h-max min-w-75`}
      >
        <div className="flex gap-2 my-3.5 font-bold text-[16px] bg-dark rounded-xl">
          <Button
            type="button"
            text="Buy"
            onClick={() => setActiveTab("buy")}
            className={`${
              activeTab === "buy" ? "bg-[#1C2D2C] text-green-500" : " text-gray"
            } py-3.5 px-4 w-full`}
          />
          <Button
            type="button"
            text="Sell"
            onClick={() => setActiveTab("sell")}
            className={`${
              activeTab === "sell" ? "bg-[#382429] text-red-500" : " text-gray"
            } py-3.5 px-4 w-full`}
          />
        </div>

        <div className="flex text-sm font-semibold pb-3">
          <Button
            type="button"
            text="Limit"
            onClick={() => setActiveSubTab("limit")}
            className={`${
              activeSubTab === "limit" ? "bg-dark text-white" : " text-gray"
            } py-2 px-4`}
          />
          <Button
            type="button"
            text="Market"
            onClick={() => setActiveSubTab("market")}
            className={`${
              activeSubTab === "market" ? "bg-dark text-white" : " text-gray"
            } py-2 px-4`}
          />
          <Button
            type="button"
            text="Conditional"
            onClick={() => setActiveSubTab("conditional")}
            className={`${
              activeSubTab === "conditional"
                ? "bg-dark text-white"
                : " text-gray"
            } py-2 px-4 flex flex-row-reverse items-end gap-1`}
            icon={<ChevronDown size={20} color="#858d9c" />}
          />
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex justify-between">
            <p
              className="text-[14px] text-gray pt-2 cursor-help underline-offset-4 underline decoration-dashed decoration-gray-700 decoration-1 "
              title="This is the maximum amount of USD that can be used on this trade given your current margin. This includes your lent assets, which will be automatically redeemed if necessary and if utilization permits it. To borrow, enable Margin below if available."
            >
              Balance
            </p>
            <span>-</span>
          </div>

          <InputEl
            type="text"
            defaultValue="0.000000922"
            id="price"
            name="price"
            className="px-3 py-2 rounded-lg text-2xl font-semibold text-white bg-dark mt-1.5"
            label="Price"
            labelClass=""
          />

          <InputEl
            type="text"
            placeholder="0"
            id="quantity"
            name="quantity"
            className="px-3 py-2 rounded-lg text-2xl font-semibold text-white bg-dark mt-1.5"
            label="Quantity"
          />

          <div>
            <InputEl
              type="range"
              id="range"
              name="range"
              className="cursor-grab"
            />
            <p className="text-gray text-xs flex justify-between pb-2 mx-1">
              <span>0</span> <span>100%</span>
            </p>
          </div>

          <InputEl
            type="text"
            placeholder="0"
            id="ordervalue"
            name="ordervalue"
            className="px-3 py-2 rounded-lg text-2xl font-semibold text-white bg-dark mt-1.5"
            label="Order Value"
          />

          <Link
            className=" mt-2 w-full text-zinc-900 font-bold text-center bg-white rounded-xl py-3"
            href="https://backpack.exchange/signup"
          >
            Sign up to trade
          </Link>
          <Link
            className=" w-full text-white font-bold text-center bg-dark rounded-xl py-3"
            href="https://backpack.exchange/login"
          >
            Sign in to trade
          </Link>

          <div className="flex gap-5">
            <div className="flex  gap-1 justify-center">
              <input
                type="checkbox"
                id="postonly"
                name="checkoption"
                className="peer sr-only"
                checked={selectedOption === "postonly"}
                onChange={() => handleOptionChange("postonly")}
              />
              <label htmlFor="postonly" className="select-none flex  ">
                <span
                  className="w-4 h-4
            border-1 border-gray-600 cursor-pointer   flex items-center justify-center rounded-xs bg-neutral-950/40"
                >
                  <svg
                    className={`w-3 h-3 text-white opacity-0  ${
                      selectedOption === "postonly" && "opacity-100"
                    }`}
                    fill="white"
                    stroke="white"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </span>
                <span className="ml-2  text-gray font-semibold text-xs">
                  Post Only
                </span>
              </label>
            </div>

            <div className="flex  gap-1 justify-center">
              <input
                type="checkbox"
                id="ioc"
                name="checkoption"
                className="peer sr-only"
                checked={selectedOption === "ioc"}
                onChange={() => handleOptionChange("ioc")}
              />
              <label htmlFor="ioc" className="select-none flex  ">
                <span className="w-4 h-4 border-1 border-gray-600 cursor-pointer   flex items-center justify-center rounded-xs bg-neutral-950/40">
                  <svg
                    className={`w-3 h-3 text-white opacity-0  ${
                      selectedOption === "ioc" && "opacity-100"
                    }`}
                    fill="white"
                    stroke="white"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </span>
                <span className="ml-2  text-gray font-semibold text-xs">
                  IOC
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BuySellCard;
