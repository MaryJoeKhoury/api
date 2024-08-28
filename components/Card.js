import React from "react";

export const Card = (props) => {
  return (
    <li className={`${props.width}`}>
      <a
        href={props.link}
        className={`flex  flex-col  items-start  justify-center gap-4  ${props.padding} group`}
      >
        {/* <div className="xl:w-[512px] xl:h-[300px] sm:w-[384px] sm:h-[200px] md:h-[195px] md:w-[295px] lg:w-[385px] lg:h-[295px]"> */}
        <div className={` ${props.size} overflow-hidden`}>
          <img
            src={props.image}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 "
          />
        </div>

        <h1 className={` my-2  text-2xl font-bold ${props.margin}`}>
          {props.title}
        </h1>
        <div className="text-xl font-semibold">{props.description}</div>
        <div
          className="text-sm group-hover:underline
        "
        >
          {props.date}
        </div>
      </a>
    </li>
  );
};
