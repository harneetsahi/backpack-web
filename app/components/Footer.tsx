import Link from "next/link";
import { Logo } from "../icons/Logo";
import { LogoText } from "../icons/LogoText";

function Footer() {
  return (
    <>
      <footer className="flex justify-center w-screen bg-darker mt-8 ">
        <div className=" py-8 flex justify-between max-w-306 w-full px-5 ">
          <div className=" flex flex-col justify-between">
            <div className="flex items-center gap-3 ">
              <Logo />
              <LogoText />
            </div>
            <div className="text-[12px] flex md:gap-3 gap-2.5">
              <p className="font-semibold w-max">Backpack Exchange © 2025</p>
              <Link
                href="https://support.backpack.exchange/legal"
                target="_blank"
                className="text-gray hover:text-gray/70"
              >
                Legal
              </Link>
              <Link
                href="https://support.backpack.exchange/legal/general-legal/privacy-policy"
                target="_blank"
                className="text-gray hover:text-gray/70"
              >
                Privacy
              </Link>
            </div>
          </div>

          <div className="flex md:gap-10 gap-5 justify-between">
            <div>
              <p className="text-[13px] font-semibold pb-1.5">Company</p>
              <div className="text-gray text-[13px] flex flex-col gap-1.5">
                <Link
                  href="https://learn.backpack.exchange/about"
                  target="_blank"
                  className="text-gray hover:text-gray/70"
                >
                  About
                </Link>
                <Link
                  href="https://sugared-duckling-ec8.notion.site/7c1995182f4a491ba8a9501ee15cbd01?v=0604ca8976fa4e5e81c5494f7c95abc4"
                  target="_blank"
                  className="text-gray hover:text-gray/70"
                >
                  Careers
                </Link>
                <Link
                  href="https://support.backpack.exchange/"
                  target="_blank"
                  className="text-gray hover:text-gray/70"
                >
                  Contact
                </Link>
              </div>
            </div>

            <div className="md:pl-15 pl-4  ">
              <p className="text-[13px] font-semibold pb-1.5">Help & Support</p>
              <div className="text-gray text-[13px] flex flex-col gap-1.5">
                <Link
                  href="https://learn.backpack.exchange/"
                  target="_blank"
                  className="text-gray hover:text-gray/70"
                >
                  Learn
                </Link>
                <Link
                  href="https://guide.backpack.exchange/"
                  target="_blank"
                  className="text-gray hover:text-gray/70"
                >
                  Guide
                </Link>
                <Link
                  href="https://support.backpack.exchange/"
                  target="_blank"
                  className="text-gray hover:text-gray/70"
                >
                  Support
                </Link>
                <Link
                  href="https://docs.backpack.exchange/"
                  target="_blank"
                  className="text-gray hover:text-gray/70"
                >
                  Documentation
                </Link>
              </div>
            </div>

            <div className="flex md:gap-4 gap-3 items-start md:pl-10 pl-4 ">
              <Link href="https://x.com/backpack" target="_blank">
                <img
                  alt="x.com"
                  loading="lazy"
                  width="18"
                  height="18"
                  src="https://backpack.exchange/x-bw.svg"
                ></img>
              </Link>
              <Link href="https://discord.com/invite/backpack" target="_blank">
                <img
                  alt="discord"
                  loading="lazy"
                  width="23"
                  height="23"
                  src="https://backpack.exchange/discord-bw.svg"
                ></img>
              </Link>

              <Link
                href="https://www.linkedin.com/company/backpackexchange/"
                target="_blank"
              >
                <img
                  alt="linkedin"
                  loading="lazy"
                  width="18"
                  height="18"
                  src="https://backpack.exchange/linkedin2.svg"
                ></img>
              </Link>

              <Link
                href="https://www.reddit.com/r/Backpack_official/"
                target="_blank"
              >
                <img
                  alt="reddit"
                  loading="lazy"
                  width="18"
                  height="18"
                  src="https://backpack.exchange/reddit2.svg"
                ></img>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
