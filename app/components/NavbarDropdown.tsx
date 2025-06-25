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

const listItems = [
  {
    name: "Stats",
    description: "Backpack stats",
    icon: <ChartLine size={17} />,
  },
  {
    name: "Market Info",
    description: "Compare funding rates",
    icon: <ChartCandlestick size={17} />,
  },
  {
    name: "Learn",
    description: "Tutorials and crypto knowledge",
    icon: <GraduationCap size={17} />,
    link: <ExternalLink size={15} />,
  },
  {
    name: "Support",
    description: "Find answers & get help",
    icon: <CircleQuestionMark size={17} />,
    link: <ExternalLink size={15} />,
  },
  {
    name: "Guide",
    description: "Backpack trading docs",
    icon: <Compass size={17} />,
    link: <ExternalLink size={15} />,
  },
  {
    name: "Documentation",
    description: "API documentation",
    icon: <BookOpen size={17} />,
    link: <ExternalLink size={15} />,
  },
  {
    name: "Download",
    description: "Apps and browser extensions",
    icon: <Download size={17} />,
    link: <ExternalLink size={15} />,
  },
  {
    name: "Merch",
    description: "Buy limited-edition drops",
    icon: <Shirt size={17} />,
    link: <ExternalLink size={15} />,
  },
  {
    name: "Affiliate Program",
    description: "Referrals and more",
    icon: <Handshake size={17} />,
    link: <ExternalLink size={15} />,
  },
];

function NavbarDropdown() {
  return (
    <>
      <ul className="z-20 shadow-2xl shadow-black bg-[#14151B] border-1 border-[#22242c] p-5 rounded-lg absolute top-10  -right-[24vw] grid grid-cols-2 gap-y-7 gap-x-8 w-126">
        {listItems.map((item, i) => {
          return (
            <li className="flex gap-3 w-full " key={i}>
              <div className="pt-1">{item.icon}</div>
              <div>
                <p className="text-white flex gap-3">
                  {item.name}{" "}
                  {item.link && (
                    <span className="text-gray-400 pt-0.5">{item.link}</span>
                  )}
                </p>

                <p className="font-medium text-xs pt-0.5 ">
                  {item.description}
                </p>
              </div>
            </li>
          );
        })}
        <li className="flex gap-3 w-full ">
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
              <span className="text-gray-400 pt-0.5">
                <ExternalLink size={15} />
              </span>
            </p>

            <p className="font-medium text-xs pt-0.5 ">
              Join our Discord community
            </p>
          </div>
        </li>
      </ul>
    </>
  );
}

export default NavbarDropdown;
