import { ChevronDown } from "lucide-react";

function SpotTopBar() {
  return (
    <>
      <div className="bg-darker h-20 flex gap-8 items-center px-4 rounded-lg font-semibold  overflow-x-scroll no-scrollbar lg:w-270 ">
        <button className="flex bg-dark py-1.5 px-2 rounded-xl items-centers shrink-0 items-center">
          <img
            className="w-8 rounded-full"
            src="/coinImages/pepe.png"
            alt="coin"
          />
          <span className="pl-2">PEPE</span>
          <span className="text-gray">/USD</span>
          <ChevronDown color="#89919F" className="pl-2" size={32} />
        </button>

        <div>
          <p className="text-green-400 font-bold text-[18px]">0.000009411</p>
          <p className="text-[14px]">$0.00</p>
        </div>

        <div>
          <p className="text-gray text-xs">24H Change</p>
          <p className="text-red-500 text-[14px]">
            <span>-0.000000562</span>
            <span className="pl-2">-5.61%</span>
          </p>
        </div>

        <div>
          <p className="text-gray text-xs">24H High</p>
          <p className="text-[14px]">0.000010155</p>
        </div>

        <div>
          <p className="text-gray text-xs">24H Low</p>
          <p className="text-[14px]">0.000009420</p>
        </div>

        <div>
          <p className="text-gray text-xs text-nowrap">24H Volume (USD)</p>
          <p className="text-[14px]">11,691.80</p>
        </div>
      </div>
    </>
  );
}

export default SpotTopBar;
