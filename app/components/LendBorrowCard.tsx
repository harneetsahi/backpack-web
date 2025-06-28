"use client";
import { useState } from "react";
import Button from "./Button";
import InputEl from "./InputEl";
import Link from "next/link";

function LendBorrowCard() {
  const [activeTab, setActiveTab] = useState("lend");
  const [activeSubTab, setActiveSubTab] = useState("lend");

  return (
    <>
      <div
        className={`flex flex-col overflow-hidden bg-darker pb-5 rounded-lg px-5 h-max min-w-75`}
      >
        <div className="flex gap-2 my-3.5 font-bold text-[15px] bg-dark rounded-xl">
          <Button
            type="button"
            text="Lend"
            onClick={() => setActiveTab("lend")}
            className={`${
              activeTab === "lend"
                ? "bg-[#1C2D2C] text-green-500 rounded-xl"
                : " text-gray"
            } py-3 px-4 w-full`}
          />
          <Button
            type="button"
            text="Borrow"
            onClick={() => setActiveTab("borrow")}
            className={`${
              activeTab === "borrow"
                ? "bg-[#382429] text-red-500 rounded-xl"
                : " text-gray"
            } py-3 px-4 w-full`}
          />
        </div>

        <div className="flex text-sm font-semibold pb-5">
          <Button
            type="button"
            text="Lend"
            onClick={() => setActiveSubTab("lend")}
            className={`${
              activeSubTab === "lend" ? "bg-dark text-white" : " text-gray"
            } py-2 px-4`}
          />
          <Button
            type="button"
            text="Redeem"
            onClick={() => setActiveSubTab("redeem")}
            className={`${
              activeSubTab === "redeem" ? "bg-dark text-white" : " text-gray"
            } py-2 px-4`}
          />
        </div>

        <div className="flex flex-col gap-3">
          <InputEl
            type="text"
            placeholder="0"
            id="amount"
            name="amount"
            className="px-3 py-2 rounded-lg text-2xl font-semibold text-white bg-dark mt-1.5"
            label="Amount"
          />

          <div className="pt-3">
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

          <Link
            className=" w-full text-zinc-900 font-bold text-center bg-white rounded-xl py-3"
            href="https://backpack.exchange/signup"
          >
            Sign up to lend and borrow
          </Link>
          <Link
            className=" w-full text-white font-bold text-center bg-dark rounded-xl py-3"
            href="https://backpack.exchange/login"
          >
            Sign in to lend and borrow
          </Link>

          <div className="flex flex-col gap-1 mt-2">
            <div className="flex justify-between text-[12px]">
              <p className="text-gray">Available to lend</p>
              <p>0 USD</p>
            </div>
            <div className="flex justify-between text-[12px]">
              <p className="text-gray">Currently lending</p>
              <p>0 USD</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LendBorrowCard;
