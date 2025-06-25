"use client";

import { ChevronDown, ChevronUp, Search } from "lucide-react";
import { Logo } from "../icons/Logo";
import { LogoText } from "../icons/LogoText";
import InputEl from "./InputEl";
import Link from "next/link";
import Button from "./Button";
import { useState } from "react";
import NavbarDropdown from "./NavbarDropdown";

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-between h-14">
        <div className="flex items-center relative">
          <div className="flex items-center gap-2.5 w-full mx-5">
            <Logo />
            <LogoText />
          </div>

          <div className="flex gap-8 items-center font-bold text-sm text-gray-400  ml-5">
            <Link href="#" className="hover:text-gray-300">
              Spot
            </Link>
            <Link href="#" className="hover:text-gray-300">
              Futures
            </Link>
            <Link href="#" className="hover:text-gray-300">
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

        <div className="hidden lg:flex items-center justify-between w-86 rounded-xl px-3 py-1 bg-[#202127] relative xl:absolute xl:left-1/2 xl:transform xl:-translate-x-1/2 ring-0 focus-within:ring-2 focus-within:ring-[#64a0fb ]">
          <div className="flex gap-2 items-center w-full flex-1">
            <Search color="#75798A" size={16} />
            <InputEl
              type="text"
              placeholder="Search markets"
              id="search"
              name="search"
              className=" bg-[#202127]  text-sm outline-none"
            />
          </div>
          <p className="px-2 rounded-sm border-1 text-sm border-[#595c69] text-[#75798A]">
            /
          </p>
        </div>

        <div className="flex gap-4 mx-4">
          <Link
            href="#"
            className="py-1.5 px-3 rounded-lg bg-[#0B2822] text-[#03c379] text-sm font-bold"
          >
            Sign up
          </Link>
          <Link
            href="#"
            className="py-1.5 px-3  rounded-lg text-[#64a0fb] bg-[#162236] text-sm font-bold"
          >
            Sign in
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
