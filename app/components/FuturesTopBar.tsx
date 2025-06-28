import { ChevronDown, Zap } from "lucide-react";

const directChildrenStyles = "shrink-0 flex flex-col gap-0.5";

function FuturesTopBar() {
  return (
    <>
      <div className="bg-darker h-20 flex gap-8 items-center px-4 rounded-lg font-semibold  overflow-x-scroll no-scrollbar lg:w-270   ">
        <button className=" shrink-0 flex bg-dark py-1.5 px-2 rounded-xl items-center ">
          <img
            className="w-8 pr-2 rounded-full"
            src="/coinImages/sol.webp"
            alt="coin"
          />
          SOL-PERP
          <ChevronDown color="#89919F" className="pl-2" size={32} />
        </button>

        <div className={directChildrenStyles}>
          <p className="text-green-400 font-bold text-[18px]">139.49</p>
          <p className="text-[14px]">139.49</p>
        </div>

        <div className={directChildrenStyles}>
          <p className="text-gray text-xs">Index Price</p>
          <p className="text-[14px]">139.50</p>
        </div>

        <div className={directChildrenStyles}>
          <p className="text-gray text-xs">24H Change</p>
          <p className="text-red-500 text-[14px]">
            <span>-3.84</span>
            <span className="pl-2">-2.68%</span>
          </p>
        </div>

        <div className={directChildrenStyles}>
          <p className="text-gray text-xs">Funding / Countdown</p>
          <p className="text-[14px]">
            <span className="text-yellow-500">0.0011%</span>
            <span className="pl-2">/ 01:11:11</span>
          </p>
        </div>

        <div className={directChildrenStyles}>
          <p className="text-gray text-xs">24H High</p>
          <p className="text-[14px]">148.08</p>
        </div>

        <div className={directChildrenStyles}>
          <p className="text-gray text-xs">24H Low</p>
          <p className="text-[14px]">139.31</p>
        </div>

        <div className={directChildrenStyles}>
          <p className="text-gray text-xs text-nowrap">24H Volume (USD)</p>
          <p className="text-[14px]">46,348,910.82</p>
        </div>

        <div className={directChildrenStyles}>
          <p className="text-gray text-xs text-nowrap">Open Interest (SOL)</p>
          <p className="text-[14px]">243,387.22</p>
        </div>

        <div className={directChildrenStyles}>
          <p className="text-gray text-xs text-nowrap">Profit APY</p>
          <p className="text-[14px] text-green-500 flex gap-1">
            5.20% <Zap fill="#EFA410" stroke="none" size={18} />
          </p>
        </div>
      </div>
    </>
  );
}

export default FuturesTopBar;
