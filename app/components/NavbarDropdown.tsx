import {
  BookOpen,
  ChartCandlestick,
  ChartLine,
  CircleQuestionMark,
  Compass,
  Download,
  ExternalLink,
  GraduationCap,
  Handshake,
  Shirt,
} from "lucide-react";
import Link from "next/link";

const listItems = [
  {
    name: "Stats",
    description: "Backpack stats",
    icon: <ChartLine size={17} />,
    link: "https://backpack.exchange/stats",
  },
  {
    name: "Market Info",
    description: "Compare funding rates",
    icon: <ChartCandlestick size={17} />,
    link: "https://backpack.exchange/market-info/funding-comparison",
  },
  {
    name: "Learn",
    description: "Tutorials and crypto knowledge",
    icon: <GraduationCap size={17} />,
    linkIcon: <ExternalLink size={15} />,
    link: "https://learn.backpack.exchange/",
  },
  {
    name: "Support",
    description: "Find answers & get help",
    icon: <CircleQuestionMark size={17} />,
    linkIcon: <ExternalLink size={15} />,
    link: "https://support.backpack.exchange/",
  },
  {
    name: "Guide",
    description: "Backpack trading docs",
    icon: <Compass size={17} />,
    linkIcon: <ExternalLink size={15} />,
    link: "https://guide.backpack.exchange/",
  },
  {
    name: "Documentation",
    description: "API documentation",
    icon: <BookOpen size={17} />,
    linkIcon: <ExternalLink size={15} />,
    link: "https://docs.backpack.exchange/",
  },
  {
    name: "Download",
    description: "Apps and browser extensions",
    icon: <Download size={17} />,
    linkIcon: <ExternalLink size={15} />,
    link: "https://backpack.app/download?shortlink=wao&c=Download_BackpackExchange&pid=Backpack%20Owned%20Site&af_xp=social&source_caller=ui",
  },
  {
    name: "Merch",
    description: "Buy limited-edition drops",
    icon: <Shirt size={17} />,
    linkIcon: <ExternalLink size={15} />,
    link: "https://shop.backpack.exchange/",
  },
  {
    name: "Affiliate Program",
    description: "Referrals and more",
    icon: <Handshake size={17} />,
    linkIcon: <ExternalLink size={15} />,
    link: "https://backpack.exchange/affiliates",
  },
];

function NavbarDropdown() {
  return (
    <>
      <ul className="z-20 shadow-2xl shadow-black bg-darker border-1 border-dark p-3 rounded-lg absolute top-10  -right-[24vw] grid grid-cols-2 gap-1  w-130">
        {listItems.map((item, i) => {
          return (
            <Link href={item.link} key={i} target="_blank">
              <li className="flex gap-3 w-full hover:bg-dark px-3 py-3 rounded-lg  ">
                <div className="pt-1">{item.icon}</div>
                <div>
                  <p className="text-white flex gap-3">
                    {item.name}{" "}
                    {item.linkIcon && (
                      <span className="text-gray pt-0.5">{item.linkIcon}</span>
                    )}
                  </p>

                  <p className="font-medium text-xs pt-0.5 ">
                    {item.description}
                  </p>
                </div>
              </li>
            </Link>
          );
        })}

        <Link href="https://discord.com/invite/backpack" target="_blank">
          <li className="flex gap-3 w-full  hover:bg-dark px-3 py-3 rounded-lg ">
            <div className="pt-1">
              <img
                src="https://backpack.exchange/discord-bw.svg"
                alt="discord logo"
                className="w-4.5"
              />
            </div>
            <div>
              <p className="text-white flex gap-3">
                Discord
                <span className="text-gray pt-0.5">
                  <ExternalLink size={15} />
                </span>
              </p>

              <p className="font-medium text-xs pt-0.5 ">
                Join our Discord community
              </p>
            </div>
          </li>
        </Link>
      </ul>
    </>
  );
}

export default NavbarDropdown;
