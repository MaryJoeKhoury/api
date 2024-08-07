import React from "react";

export const Card = (props) => {
  return (
    <li className="flex flex-row md:w-1/2">
      <div className=" flex  flex-col  items-start  justify-center gap-4  p-8 ">
        <img src={props.image} className="w-full " />

        <h1 className=" my-2  text-2xl font-bold">{props.title}</h1>

        <div>{props.description}</div>
      </div>
    </li>
  );
};
