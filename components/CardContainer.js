import React from "react";
import AlignContainer from "./AlignContainer";
const CardContainer = (props) => {
  return (
    // <AlignContainer>
    <ul className="flex items-start justify-center container  flex-row flex-wrap md:justify-between   text-white">
      {/* <div className="flex">{props.children}</div> */}
      {props.children}
    </ul>
    // </AlignContainer>
  );
};

export default CardContainer;
