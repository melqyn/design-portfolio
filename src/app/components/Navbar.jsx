"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <nav className="fixed top=0 left-0 right-0 z-10 bg-[#574F4A] bg-opacity-95">
      <div className="container flex flex-wrap items-center justify-between mx-auto px-12 p-4">
        <Link href={"/"} className="text-[#FDF9F7] font-bold">
          melaniequek
        </Link>
        <div className="mobile-menu block md:hidden">
          {navbarOpen ? (
            <button
              onClick={toggleNavbar}
              className="flex items-center px-3 py-2 text-[#FDF9F7] hover:text-[#c8bec881]"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={toggleNavbar}
              className="flex items-center px-3 py-2 text-[#FDF9F7] hover:text-[#c8bec881]"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          )}
        </div>

        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 flex-row items-center">
            <li>
              <Link
                href={"/#works"}
                className="text-[#FDF9F7] hover:text-[#c8bec881] font-bold block py-2 pl-3 pr-4"
              >
                Works
              </Link>
            </li>
            <li>
              <Link
                href={"/about"}
                className="text-[#FDF9F7] hover:text-[#c8bec881] font-bold block py-2 pl-3 pr-4"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                href={"/Melanie's Resume.pdf"}
                target="_blank"
                className="text-[#FDF9F7] hover:text-[#c8bec881] font-bold block py-2 pl-3 pr-4 
                        border-2 border-[#FDF9F7] hover:border-[#c8bec881] rounded-full"
              >
                Resume
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {navbarOpen ? <MenuOverlay /> : null}
    </nav>
  );
};
export default Navbar;
