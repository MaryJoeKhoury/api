// import React from "react";
import { useEffect } from "react";
import { animateCards } from "@/utils/animation";
import AlignContainer from "./AlignContainer";
const CardContainer = (props) => {
  useEffect(() => {
    animateCards();
  }, []);
  return (
    // <AlignContainer>
    <ul className="flex items-start justify-center container  flex-row flex-wrap md:justify-between cards  text-white">
      {/* <div className="flex">{props.children}</div> */}
      {props.children}
    </ul>
    // </AlignContainer>
  );
};

export default CardContainer;
