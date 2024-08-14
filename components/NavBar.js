import React, { useState, useEffect } from "react";
import AlignContainer from "./AlignContainer";
import Navigation from "./svgs/Navigation";
import Close from "./svgs/Close";
import Link from "next/link";
import { usePathname } from "next/navigation";
const NavBar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const handleMobileMenu = () => {
    setMenuActive(!menuActive);
  };
  const pathname = usePathname();
  return (
    <>
      <div>
        <AlignContainer>
          <div className=" hidden md:flex flex-row justify-between py-8 items-center">
            <div className="border-2 border-white border-solid w-12 h-12 rounded-full p-12 flex items-center justify-center">
              <a href="#" className="text-2xl text-white">
                Logo
              </a>
            </div>

            <ul className="flex flex-row gap-8 text-lg text-zinc-400 font-semibold">
              <li>
                <Link
                  href="/about"
                  className={`${
                    pathname === "/about"
                      ? "relative after:absolute after:h-[2px]  after:-bottom-2 after:bg-[#fe424c] after:rounded-md after:m-auto after:right-4 after:w-2/4 translate-x-1 text-white after:inset-5 after:scale-1 "
                      : "relative after:absolute after:h-[2px] after:w-0 after:-bottom-2 after:bg-[#fe424c] after:rounded-md after:m-auto after:right-4 hover:after:w-2/4 translate-x-1 duration-150 hover:text-white after:inset-5 after:scale-1 after:duration-150"
                  } `}
                >
                  about us
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className={`${
                    pathname === "/"
                      ? "relative after:absolute after:h-[2px]  after:-bottom-2 after:bg-[#fe424c] after:rounded-md after:m-auto after:right-4 after:w-2/4 translate-x-1 text-white after:inset-5 after:scale-1 "
                      : "relative after:absolute after:h-[2px] after:w-0 after:-bottom-2 after:bg-[#fe424c] after:rounded-md after:m-auto after:right-4 hover:after:w-2/4 translate-x-1 duration-150 hover:text-white after:inset-5 after:scale-1 after:duration-150"
                  } `}
                >
                  our work
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="relative after:absolute after:h-[2px] after:w-0 after:-bottom-2 after:bg-[#fe424c] after:rounded-md after:m-auto after:right-4 hover:after:w-2/4 translate-x-1 duration-150 hover:text-white after:inset-5 after:scale-1 after:duration-150"
                >
                  our clients
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="relative after:absolute after:h-[2px] after:w-0 after:-bottom-2 after:bg-[#fe424c] after:rounded-md after:m-auto after:right-4 hover:after:w-2/4 translate-x-1 duration-150 hover:text-white after:inset-5 after:scale-1 after:duration-150"
                >
                  our team
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`${
                    pathname === "/contact"
                      ? "relative after:absolute after:h-[2px]  after:-bottom-2 after:bg-[#fe424c] after:rounded-md after:m-auto after:right-4 after:w-2/4 translate-x-1 text-white after:inset-5 after:scale-1 "
                      : "relative after:absolute after:h-[2px] after:w-0 after:-bottom-2 after:bg-[#fe424c] after:rounded-md after:m-auto after:right-4 hover:after:w-2/4 translate-x-1 duration-150 hover:text-white after:inset-5 after:scale-1 after:duration-150"
                  } `}
                >
                  contact us
                </Link>
              </li>
              {/* <li>
                <a
                  href="#"
                  className="relative after:absolute after:h-1 after:w-0 after:-bottom-2 after:bg-red-400 after:rounded-md after:m-auto after:right-1 hover:after:w-2/4 translate-x-1 duration-150 hover:text-white after:inset-5 after:scale-1 after:duration-150"
                >
                  lang
                </a>
              </li> */}
            </ul>
          </div>
        </AlignContainer>
      </div>

      <div
        className={`fixed right-0 top-0 flex h-screen w-full transform flex-col items-cente gap-20 bg-black text-center text-2xl md:hidden ${
          menuActive ? "translate-x-0" : "translate-x-full"
        } z-10 transition-transform duration-300 ease-in-out`}
      >
        <li className="ml-auto mr-7 pt-10 list-none">
          <Close onClick={handleMobileMenu} />
          {/* <img src="/icons/close.svg " className="ml-auto w-8 py-10" /> */}
        </li>
        <ul className="space-y-10">
          <li>
            <Link href="/about" className="font-bold text-white">
              about us
            </Link>
          </li>
          <li>
            <Link href="/" className="font-bold text-white">
              our work
            </Link>
          </li>
          <li>
            <a href="#" className="font-bold text-white">
              our clients
            </a>
          </li>
          <li>
            <a href="#" className="font-bold text-white">
              our team
            </a>
          </li>
          <li>
            <Link href="/contact" className="font-bold text-white">
              contact-us
            </Link>
          </li>
        </ul>
      </div>

      <ul className="flex w-full items-center justify-center  px-2 py-8 align-middle md:hidden">
        <div className="border-2 border-white border-solid w-12 h-12 rounded-full p-8 flex items-center justify-center">
          <a href="#" className="text-2xl text-white">
            Logo
          </a>
        </div>
        <li className="mr-4 last:ml-auto">
          <button className="md:hidden">
            <div
              className={`relative cursor-pointer ${
                menuActive ? "active" : ""
              }`}
              id="ham-menu"
              onClick={handleMobileMenu}
            >
              <Navigation />
            </div>
          </button>
        </li>
      </ul>
    </>
  );
};

export default NavBar;
