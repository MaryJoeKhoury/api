import React from "react";
import AlignContainer from "./AlignContainer";
import Linkedin from "@/components/svgs/Linkedin";
import Instagram from "./svgs/Instagram";
import Link from "next/link";

const Footer = (props) => {
  return (
    <div className="bg-[#fe424c] text-white py-12 mt-12">
      <AlignContainer>
        <div className="flex flex-row justify-between flex-wrap ">
          <div className="sm:w-1/5 w-1/2">
            <h5 className="text-xl mb-6 font-light">sitemap</h5>
            <ul className="font-semibold">
              <li>
                <Link
                  href="/about"
                  className="relative after:absolute after:h-[2px] after:w-0 after:-bottom-2 after:bg-white after:rounded-md after:m-auto after:right-4 hover:after:w-2/4 translate-x-1 duration-150 hover:text-white after:inset-5 after:scale-1 after:duration-150"
                >
                  about us
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="relative after:absolute after:h-[2px] after:w-0 after:-bottom-2 after:bg-white after:rounded-md after:m-auto after:right-4 hover:after:w-2/4 translate-x-1 duration-150 hover:text-white after:inset-5 after:scale-1 after:duration-150"
                >
                  our work
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="relative after:absolute after:h-[2px] after:w-0 after:-bottom-2 after:bg-white after:rounded-md after:m-auto after:right-4 hover:after:w-2/4 translate-x-1 duration-150 hover:text-white after:inset-5 after:scale-1 after:duration-150"
                >
                  our clients
                </a>
              </li>
              <li>
                <Link
                  href="/team"
                  className="relative after:absolute after:h-[2px] after:w-0 after:-bottom-2 after:bg-white after:rounded-md after:m-auto after:right-4 hover:after:w-2/4 translate-x-1 duration-150 hover:text-white after:inset-5 after:scale-1 after:duration-150"
                >
                  our teams
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="relative after:absolute after:h-[2px] after:w-0 after:-bottom-2 after:bg-white after:rounded-md after:m-auto after:right-4 hover:after:w-2/4 translate-x-1 duration-150 hover:text-white after:inset-5 after:scale-1 after:duration-150"
                >
                  contact us
                </Link>
              </li>
            </ul>
          </div>
          <div className="sm:w-1/5 w-1/2">
            <h1 className="text-xl mb-6 font-light">offices</h1>
            <ul className="font-semibold">
              <li>
                <a
                  href="#"
                  className="relative after:absolute after:h-[2px] after:w-0 after:-bottom-2 after:bg-white after:rounded-md after:m-auto after:right-4 hover:after:w-2/4 translate-x-1 duration-150 hover:text-white after:inset-5 after:scale-1 after:duration-150"
                >
                  beirut,LEBANON
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="relative after:absolute after:h-[2px] after:w-0 after:-bottom-2 after:bg-white after:rounded-md after:m-auto after:right-4 hover:after:w-2/4 translate-x-1 duration-150 hover:text-white after:inset-5 after:scale-1 after:duration-150"
                >
                  moscow,RUSSIA
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="relative after:absolute after:h-[2px]  after:w-0 after:-bottom-2 after:bg-white after:rounded-md after:m-auto after:right-4 hover:after:w-2/4 translate-x-1 duration-150 hover:text-white after:inset-5 after:scale-1 after:duration-150"
                >
                  paris,FRANCE
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="relative after:absolute after:h-[2px] after:w-0 after:-bottom-2 after:bg-white after:rounded-md after:m-auto after:right-4 hover:after:w-2/4 translate-x-1 duration-150 hover:text-white after:inset-5 after:scale-1 after:duration-150"
                >
                  berlin,GERMANY
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="relative after:absolute after:h-[2px] after:w-0 after:-bottom-2 after:bg-white after:rounded-md after:m-auto after:right-4 hover:after:w-2/4 translate-x-1 duration-150 hover:text-white after:inset-5 after:scale-1 after:duration-150"
                >
                  madrid,SPAIN
                </a>
              </li>
            </ul>
          </div>
          <div className="sm:ml-auto pr-16">
            <h1 className="text-xl sm:mt-0 mt-4 sm:mb-6 mb-4 font-light">
              inquires
            </h1>
            <ul>
              <li>
                <a
                  href="#"
                  className="relative after:absolute after:h-[2px] after:w-0 after:-bottom-2 after:bg-white after:rounded-md after:m-auto after:right-4 hover:after:w-2/4 translate-x-1 duration-150 hover:text-white after:inset-5 after:scale-1 after:duration-150"
                >
                  test@test.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col  sm:items-center items-start sm:gap-0 gap-4 justify-between mt-6">
          <div className="flex flex-row text-4xl items-center gap-4 ">
            <div>
              <a href="#">LOGO</a>{" "}
            </div>
            <span className=" h-10 border-solid border-[1px] border-white rounded-lg"></span>
            <a href={props.linkedin}>
              <Linkedin />
            </a>
            <a href={props.instagram}>
              <Instagram />
            </a>
          </div>
          <div className="flex flex-row text-sm items-center gap-2 relative after:absolute after:h-[2px] after:w-0 after:-bottom-2 after:bg-white after:rounded-md after:m-auto after:right-4 hover:after:w-2/4 translate-x-1 duration-150 hover:text-white after:inset-5 after:scale-1 after:duration-150">
            <a href="#">privacy policy</a>
            <span className=" h-6 border-solid border-[1px] border-white rounded-lg"></span>
            <a href="#">terms and conditions</a>
          </div>
        </div>
      </AlignContainer>
    </div>
  );
};

export default Footer;
