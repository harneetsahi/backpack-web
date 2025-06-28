import { ChevronDown } from "lucide-react";

const directChildrenStyles = "shrink-0 flex flex-col gap-0.5";

function LendTopBar() {
  return (
    <>
      <div className="bg-darker h-20 flex gap-8 items-center px-4 rounded-lg font-semibold  overflow-x-scroll no-scrollbar lg:w-270  ">
        <button className=" shrink-0 flex bg-dark py-1.5 px-2 rounded-xl items-center ">
          <img
            className="w-6  rounded-full"
            src="/coinImages/usd.png"
            alt="coin"
          />
          <span className="pl-2">USD</span>

          <ChevronDown color="#89919F" className="pl-2" size={32} />
        </button>

        <div className={directChildrenStyles}>
          <p className="text-gray text-[12px]">Reserve Size</p>
          <p className="text-[16px]">$65.3M</p>
        </div>

        <div className={directChildrenStyles}>
          <p className="text-gray text-[12px]">Utilization</p>
          <p className="text-[16px]">42.91%</p>
        </div>

        <div className={directChildrenStyles}>
          <p className="text-gray text-[12px]">Interest Countdown</p>
          <p className="text-[16px]">01:11:11</p>
        </div>
      </div>
    </>
  );
}

export default LendTopBar;
