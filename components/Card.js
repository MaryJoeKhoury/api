import React from "react";

export const Card = (props) => {
  return (
    <div className=" flex  flex-col md:w-1/2 items-start  justify-center gap-4  p-8 ">
      <a href={props.link}>
        <div className="">
          <img src={props.image} className="w-full " />
        </div>

        <h1 className=" my-2  text-2xl font-bold">{props.title}</h1>

        <div className="text-xl">
          <p>{props.description}</p>
        </div>
      </a>
    </div>
  );
};
