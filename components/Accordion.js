import React from "react";
import AlignContainer from "./AlignContainer";
import Plus from "./svgs/Plus";
import Minus from "./svgs/Minus";

const Accordion = (props) => {
  return (
    <AlignContainer>
      <div className="overflow-hidden text-white  bg-[#fe424c] ">
        <button
          onClick={props.onClick}
          className={` ${
            props.isOpen
              ? ""
              : "after:w-full after:h-[1px] after:left-0 after:bg-white after:absolute relative after:bottom-0"
          } flex w-full flex-row items-center   justify-between  px-4 py-4 text-left text-xl outline-none`}
        >
          <p>
            <img src={props.profile} className="bg-white" />
            {props.title}
          </p>

          <Plus
            className={`w-4 duration-150 ${props.isOpen ? "hidden" : ""}`}
          />
          <Minus className={`w-6 ${props.isOpen ? "" : "hidden"} `} />
        </button>
        <div
          className={`${
            props.isOpen
              ? "h-full px-4 text-black pb-4 duration-300 after:w-full after:h-[1px] after:left-0 after:bg-white after:absolute relative after:bottom-0"
              : "h-0"
          } `}
        >
          <p>{props.details}</p>
        </div>
      </div>
    </AlignContainer>
  );
};

export default Accordion;
