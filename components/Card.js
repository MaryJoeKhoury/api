import Image from "next/image";
import { useEffect } from "react";
import { animateCards } from "@/utils/animation";

export const Card = (props) => {
  useEffect(() => {
    animateCards();
  }, []);

  return (
    <li className={`${props.width} card-container`}>
      <a
        href={props.link}
        className={`flex flex-col items-start justify-center gap-4 ${props.padding} group card-reveal`}
      >
        <div className={`${props.size} overflow-hidden`}>
          <Image
            src={props.image}
            width={1200}
            height={700}
            alt="Picture of the author"
            style={{ objectFit: "cover", height: "100%" }}
            className="hover:scale-110 transition-transform duration-500 card-image"
          />
        </div>

        <h1 className={`my-2 text-2xl font-bold ${props.margin}`}>
          {props.title}
        </h1>
        <div className="text-xl font-semibold">{props.description}</div>
        <div className="text-sm group-hover:underline">{props.date}</div>
      </a>
    </li>
  );
};
