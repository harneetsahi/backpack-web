"use client";

import { useState } from "react";
import Button from "./Button";
import { pepeusd } from "../data/cardData";
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

function SpotChartSideCard() {
  const [activeTab, setActiveTab] = useState("book");
  return (
    <>
      <div className={`  bg-darker pb-5 rounded-lg px-5 overflow-hidden`}>
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

        <div className=" overflow-scroll h-130 no-scrollbar">
          <Table>
            <TableHeader>
              <TableRow className="text-[13px] ">
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
        </div>
      </div>
    </>
  );
}

export default SpotChartSideCard;
