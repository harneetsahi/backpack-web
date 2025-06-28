import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { lendCoins } from "../data/cardData";
import { Zap } from "lucide-react";

const headerStyles = "text-gray font-semibold lg:text-[15px] text-[13px] wrap";

function LendCard() {
  return (
    <>
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className={`${headerStyles}`}>Name</TableHead>
              <TableHead className={`${headerStyles} text-right `}>
                Lend APY
              </TableHead>
              <TableHead className={`${headerStyles} text-right `}>
                Borrow APY
              </TableHead>
              <TableHead className={`${headerStyles} text-right `}>
                Total Lent
              </TableHead>
              <TableHead className={`${headerStyles} text-right flex-wrap `}>
                Total Borrowed
              </TableHead>
              <TableHead className={`${headerStyles} text-right  `}>
                Utilization
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {lendCoins.map((item, i) => {
              return (
                <TableRow
                  className="font-semibold cursor-pointer hover:bg-dark "
                  key={i}
                >
                  <TableCell className="flex items-center py-3">
                    <img
                      src={item.image}
                      alt="coin image"
                      className="object-cover rounded-full w-11 h-11"
                    />
                    <div className="pl-4">
                      <p className="text-lg">{item.name}</p>
                      <p className="text-gray text-[12px]">{item.symbol}</p>
                    </div>
                  </TableCell>
                  <TableCell className="text-right text-[16px] text-green-500 ">
                    <div className="flex items-center justify-end gap-1">
                      {item.lend}
                      {item.lend > "5" ? (
                        <Zap fill="#EFA410" stroke="none" size={18} />
                      ) : null}
                    </div>
                  </TableCell>
                  <TableCell className="text-right text-[16px]  text-red-500 ">
                    {item.borrow}
                  </TableCell>
                  <TableCell className="text-right text-[16px]">
                    <div>
                      <p>{item.totalLent}</p>
                      <p className="text-gray text-[15px]">
                        {item.totalLentAmt}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell className="text-right text-[16px]">
                    <div>
                      <p>{item.totalBorrowed}</p>
                      <p className="text-gray text-[15px]">
                        {item.totalBorrowedAmt}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell className="text-right text-[16px]">
                    {item.utilization}
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

export default LendCard;
