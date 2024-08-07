import React from "react";
import AlignContainer from "./AlignContainer";
const CardContainer = (props) => {
  return (
    <AlignContainer>
      <ul className="flex items-start justify-center flex-row flex-wrap   text-white">
        {/* <div className="flex">{props.children}</div> */}
        {props.children}
      </ul>
    </AlignContainer>
  );
};

export default CardContainer;
