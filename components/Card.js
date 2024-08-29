import React from "react";
import Image from "next/image";
import { Fullscreen } from "lucide-react";

export const Card = (props) => {
  return (
    <li className={`${props.width}`}>
      <a
        href={props.link}
        className={`flex  flex-col  items-start  justify-center gap-4  ${props.padding} group`}
      >
        {/* <div className="xl:w-[512px] xl:h-[300px] sm:w-[384px] sm:h-[200px] md:h-[195px] md:w-[295px] lg:w-[385px] lg:h-[295px]"> */}
        <div className={` ${props.size} overflow-hidden`}>
          {/* <img src={props.image} /> */}
          <Image
            src={props.image}
            width={1200}
            height={700}
            alt="Picture of the author"
            style={{ objectFit: "cover", height: "100%" }}
            // layout="fill"
            className="  hover:scale-110 transition-transform duration-500 "
          />
        </div>

        <h1 className={` my-2  text-2xl  font-bold ${props.margin}`}>
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
