import React from "react";
import AlignContainer from "./AlignContainer";
import Linkedin from "@/components/svgs/Linkedin";
import Instagram from "./svgs/Instagram";

const Footer = () => {
  return (
    <div className="bg-[#fe424c] text-white py-12 mt-12">
      <AlignContainer>
        <div className="flex flex-row justify-between flex-wrap ">
          <div className="sm:w-1/5 w-1/2">
            <h5 className="text-xl mb-6 font-light">sitemap</h5>
            <ul className="font-semibold">
              <li>
                <a href="#">about us</a>
              </li>
              <li>
                <a href="#">our work</a>
              </li>
              <li>
                <a href="#">our clients</a>
              </li>
              <li>
                <a href="#">our teams</a>
              </li>
              <li>
                <a href="#">contact us</a>
              </li>
            </ul>
          </div>
          <div className="sm:w-1/5 w-1/2">
            <h1 className="text-xl mb-6 font-light">offices</h1>
            <ul className="font-semibold">
              <li>
                <a href="#">beirut,LEBANON</a>
              </li>
              <li>
                <a href="#">moscow,RUSSIA</a>
              </li>
              <li>
                <a href="#">paris,FRANCE</a>
              </li>
              <li>
                <a href="#">berlin,GERMANY</a>
              </li>
              <li>
                <a href="#">madrid,SPAIN</a>
              </li>
            </ul>
          </div>
          <div className="sm:ml-auto pr-16">
            <h1 className="text-xl sm:mt-0 mt-4 sm:mb-6 mb-4 font-light">
              inquires
            </h1>
            <ul>
              <li>
                <a href="#">test@test.com</a>
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
            <a href="https://www.linkedin.com/">
              <Linkedin />
            </a>
            <a href="https://www.instagram.com/">
              <Instagram />
            </a>
          </div>
          <div className="flex flex-row text-sm items-center gap-2 ">
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
