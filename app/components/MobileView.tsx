import Link from "next/link";
import { Logo } from "../icons/Logo";
import { ExternalLink } from "lucide-react";

// TODO: put an id for the mapped items

const linkOptions = [
  {
    title: "Download App",
    link: "https://backpack.app/download",
  },
  {
    title: "More Downloads",
    link: "https://backpack.app/download",
  },
  {
    title: "中文下载指南",
    link: "https://support.backpack.exchange/support-docs/cn/kai-shi-shi-yong/yi-dong-duan-xia-zai-zhi-nan",
  },
];

function MobileView() {
  return (
    <>
      <div className="sm:hidden flex flex-col justify-center items-center h-screen px-8 text-center ">
        <Logo height="65" width="90" />

        <h1 className="text-xl font-bold pt-6">Backpack Exchange</h1>

        <p className="pt-7 text-[#9daac1] tracking-wide ">
          Backpack Exchange is now available on our mobile app! Download the app
          for iOS or Android to get started, or continue using the website on a
          desktop device.
        </p>

        <div className="pt-6 flex flex-col gap-3">
          {linkOptions.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="py-3 px-4 rounded-xl text-white bg-[#202127] font-bold hover:bg-[#1b1c21] "
            >
              {item.title}
              <span className="pl-2">
                <ExternalLink size={16} color="#a4a3a3" className="inline " />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default MobileView;
