"use client";

import { ChevronDown, Search } from "lucide-react";
import { Logo } from "../icons/Logo";
import { LogoText } from "../icons/LogoText";
import InputEl from "./InputEl";
import Link from "next/link";
import Button from "./Button";
import { useState } from "react";
import NavbarDropdown from "./NavbarDropdown";

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  function handleActive(key: string) {
    setActive(key);
  }

  return (
    <>
      <nav className="flex items-center justify-between h-14">
        <div className="flex items-center relative">
          <Link href="/" className="flex items-center gap-2.5 w-full mx-5">
            <Logo />
            <LogoText />
          </Link>

          <div className="flex gap-8 items-center font-bold text-sm text-gray  ml-5">
            <Link
              href="/spot"
              className={`hover:text-gray-300 ${
                active === "spot" ? "text-gray-300" : ""
              }`}
              onClick={() => handleActive("spot")}
            >
              Spot
            </Link>
            <Link
              href="/futures"
              className={`hover:text-gray-300 ${
                active === "futures" ? "text-gray-300" : ""
              }`}
              onClick={() => handleActive("futures")}
            >
              Futures
            </Link>
            <Link
              href="/lend"
              className={`hover:text-gray-300 ${
                active === "lend" ? "text-gray-300" : ""
              }`}
              onClick={() => handleActive("lend")}
            >
              Lend
            </Link>

            <Button
              className="flex flex-row-reverse  gap-0.5 cursor-pointer hover:text-gray-300"
              text="More"
              icon={
                <ChevronDown
                  size={20}
                  className={` transition-transform ${
                    showDropdown ? "rotate-180" : null
                  }`}
                />
              }
              onClick={() => setShowDropdown((prev) => !prev)}
            ></Button>
            {showDropdown && <NavbarDropdown />}
          </div>
        </div>

        <div className="hidden lg:flex items-center justify-between w-86 rounded-xl px-3 py-1 bg-dark relative xl:absolute xl:left-1/2 xl:transform xl:-translate-x-1/2 ring-0 focus-within:ring-2 focus-within:ring-[#64a0fb ]">
          <div className="flex gap-2 items-center w-full flex-1">
            <Search color="#75798A" size={16} />
            <InputEl
              type="text"
              placeholder="Search markets"
              id="search"
              name="search"
              className=" bg-dark  text-sm outline-none w-70"
            />
          </div>
          <p className="px-2 rounded-sm border-1 text-sm border-[#595c69] text-[#75798A]">
            /
          </p>
        </div>

        <div className="flex gap-4 mx-4">
          <Link
            href="https://backpack.exchange/signup"
            className="py-1.5 px-3 rounded-lg bg-[#0B2822] hover:bg-[#0b2822da] text-[#03c379] text-sm font-bold"
          >
            Sign up
          </Link>
          <Link
            href="https://backpack.exchange/login"
            className="py-1.5 px-3  rounded-lg text-[#64a0fb] bg-[#162236] hover:bg-[#162236d6] text-sm font-bold"
          >
            Sign in
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
