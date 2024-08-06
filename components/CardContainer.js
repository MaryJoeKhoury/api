import React from "react";
import AlignContainer from "./AlignContainer";
const CardContainer = (props) => {
  return (
    <AlignContainer>
      <div className="flex  items-center justify-center flex-row flex-wrap align-middle  text-white">
        {props.children}
      </div>
    </AlignContainer>
  );
};

export default CardContainer;
