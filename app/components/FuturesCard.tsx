import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { futuresCoins } from "../data/cardData";
import { ArrowUp } from "lucide-react";

const headerStyles = "text-gray font-semibold lg:text-[15px] text-[13px]";

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
                  className=" font-semibold cursor-pointer hover:bg-dark "
                  key={i}
                >
                  <TableCell className="flex items-center py-3">
                    <img
                      src={item.image}
                      alt="coin image"
                      className="object-cover rounded-full w-11 h-11"
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
