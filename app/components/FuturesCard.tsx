import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { futuresCoins } from "../data/cardData";
import Image from "next/image";
import { ArrowUp } from "lucide-react";

const headerStyles = "text-gray-400 font-semibold lg:text-[15px] text-[13px]";

function FuturesCard() {
  return (
    <>
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className={`${headerStyles}`}>Name</TableHead>
              <TableHead className={`${headerStyles} text-right `}>
                <div className=" flex justify-end items-center gap-2">
                  <ArrowUp size={16} />
                  <span>Price</span>
                </div>
              </TableHead>
              <TableHead className={`${headerStyles} text-right `}>
                24h Volume
              </TableHead>
              <TableHead className={`${headerStyles} text-right `}>
                Market Cap
              </TableHead>
              <TableHead className={`${headerStyles} text-right `}>
                24h Change
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {futuresCoins.map((item, i) => {
              return (
                <TableRow
                  className=" font-semibold cursor-pointer hover:bg-[#1d1e23] "
                  key={i}
                >
                  <TableCell className="flex items-center py-3">
                    <Image
                      src={item.image}
                      alt="coin image"
                      width={35}
                      height={1}
                      className="object-contain"
                    />
                    <div className="pl-4 text-[16px]">{item.name}</div>
                  </TableCell>
                  <TableCell className="text-right text-[16px]">
                    {item.price}
                  </TableCell>
                  <TableCell className="text-right text-[16px]">
                    {item.volume}
                  </TableCell>
                  <TableCell className="text-right text-[16px]">
                    {item.interest}
                  </TableCell>
                  <TableCell
                    className={`text-right text-[16px] ${
                      item.change.startsWith("-") &&
                      item.change.endsWith("%") &&
                      "text-red-500"
                    } ${
                      item.change.startsWith("+") &&
                      item.change.endsWith("%") &&
                      "text-green-500"
                    }`}
                  >
                    {item.change}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </>
  );
}

export default FuturesCard;
