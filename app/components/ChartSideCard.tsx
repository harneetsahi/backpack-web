"use client";

import { useEffect, useState } from "react";
import Button from "./Button";
import { pepeusd, trade } from "../data/cardData";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const activeStyles = "bg-dark text-white";
const inactiveStyles = "text-gray";

// const random = Math.floor(Math.random() * 2);

function ChartSideCard() {
  const [activeTab, setActiveTab] = useState("book");
  // const [randomVal, setRandomVal] = useState(0);

  // useEffect(() => {
  //   setRandomVal(Math.floor(Math.random() * 2));
  // }, []);

  return (
    <>
      <div
        className={`  bg-darker pb-5 rounded-lg px-2 overflow-hidden lg:w-78 `}
      >
        <div className="flex gap-2 my-3.5 font-bold text-[14px]">
          <Button
            type="button"
            text="Book"
            onClick={() => setActiveTab("book")}
            className={`${
              activeTab === "book" ? activeStyles : inactiveStyles
            } py-2 px-4`}
          />
          <Button
            type="button"
            text="Trades"
            onClick={() => setActiveTab("trades")}
            className={`${
              activeTab === "trades" ? activeStyles : inactiveStyles
            } py-2 px-4`}
          />
        </div>

        <div className=" overflow-scroll h-137 no-scrollbar">
          {activeTab === "book" && (
            <Table>
              <TableHeader>
                <TableRow className="text-[12px] ">
                  <TableHead>Price (USD)</TableHead>
                  <TableHead className="text-gray ">Size (PEPE)</TableHead>
                  <TableHead className="text-gray">Total (PEPE)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pepeusd.map((item, i) => (
                  <TableRow
                    key={i}
                    className={` text-xs
                  ${i < 7 ? "bg-[#391D23]" : ""}
                  ${i > 13 ? "bg-[#0F3029]" : ""}
                `}
                  >
                    <TableCell
                      className={`
                    ${i < 10 ? "text-red-500" : "text-green-500"}
                   
                    `}
                    >
                      {item.price}
                    </TableCell>
                    <TableCell
                      className={`text-right
                   ${i > 8 && i < 14 ? "bg-[#0F3029]" : ""}
                  `}
                    >
                      {item.size}
                    </TableCell>
                    <TableCell
                      className={`text-right
                   ${i > 8 && i < 14 ? "bg-[#0F3029]" : ""}
                   ${i > 8 && i < 14 ? "bg-[#0F6448]" : ""}
                  `}
                    >
                      {item.total}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}

          {activeTab === "trades" && (
            <Table>
              <TableHeader>
                <TableRow className="text-[12px] ">
                  <TableHead className=" text-gray font-semibold">
                    Price (USD)
                  </TableHead>
                  <TableHead className="text-gray font-semibold text-right">
                    Qty (PEPE)
                  </TableHead>
                  <TableHead className="text-gray "></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {trade.map((item, i) => {
                  const randomVal = Math.random() > 0.5;

                  return (
                    <TableRow key={i} className={` text-md font-semibold`}>
                      <TableCell
                        className={`
                     ${randomVal ? "text-red-500" : "text-green-500"} max-w-10
                     `}
                      >
                        {item.price}
                      </TableCell>
                      <TableCell
                        className={`text-sm text-right text-white max-w-10`}
                      >
                        {item.quantity}
                      </TableCell>
                      <TableCell className={`text-sm text-right text-gray`}>
                        {item.time}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          )}
        </div>
      </div>
    </>
  );
}

export default ChartSideCard;
