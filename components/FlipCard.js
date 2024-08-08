import React from "react";

const FlipCard = (props) => {
  return (
    <div>
      <a href="#">
        <div className="relative group">
          <img src={props.image} className="opacity-50" />
          <h1 className="text-white absolute m-auto left-0 right-0 top-2/4 md:text-3xl text-xl  text-center ">
            {props.title}
          </h1>
          <h3 className="text-white absolute m-auto left-0 right-0 top-0   md:text-xl text-lg text-center ">
            {props.description}
          </h3>
          <div className="text-white absolute m-auto  right-4 bottom-0 text-2xl  text-center ">
            <div className="flex flex-row items-center hover:cursor-pointer">
              <h1 className="relative after:absolute after:h-[2px] after:w-0 after:-bottom-0 after:right-0 after:left-0 after:m-auto after:bg-[#fe424c] after:rounded-md group-hover:after:w-full translate-x-1 duration-150 hover:text-white  after:duration-150">
                See More
              </h1>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default FlipCard;
