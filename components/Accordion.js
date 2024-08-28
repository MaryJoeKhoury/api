import React from "react";
import AlignContainer from "./AlignContainer";
import Plus from "./svgs/Plus";
import Minus from "./svgs/Minus";

const Accordion = (props) => {
  return (
    <AlignContainer>
      <div
        className={`overflow-hidden text-white border-b-2 border-solid border-white duration-20 `}
      >
        <button
          onClick={props.onClick}
          className={` px-4 py-4 ${
            props.isOpen ? "duration-300" : ""
          } flex w-full flex-row items-center   justify-between  px-4 py-4 text-left text-xl outline-none`}
        >
          <p>
            <img src={props.profile} className="bg-white" />
            {props.title}
          </p>

          <Plus
            className={`w-4 duration-150 ${props.isOpen ? "hidden" : ""}`}
          />
          <Minus className={`w-6 ${props.isOpen ? "" : "hidden "} `} />
        </button>
        <div
          className={`px-4 ${
            props.isOpen
              ? "h-full   text-white pb-4 duration-75 ease-in-out  "
              : "h-0 duration-75 ease-in-out"
          } `}
        >
          <p>{props.details}</p>
        </div>
      </div>
    </AlignContainer>
  );
};

export default Accordion;
