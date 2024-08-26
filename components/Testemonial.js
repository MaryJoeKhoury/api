import React from "react";
import { Quote } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import { useSwiper } from "swiper/react";

const Testemonial = (props) => {
  const swiper = useSwiper();
  return (
    <>
      <div className=" flex md:flex-row flex-col  items-center justify-center bg-black h-[200%] ">
        <div className="md:w-3/5">
          <h3 className="text-2xl text-[#fe424c] md:text-left text-center">
            Testemonials
          </h3>
          <h1 className="md:text-5xl text-3xl font-bold my-6 md:text-left text-center">
            Our Clients <span className="text-[#fe424c]">Love Us.</span>
          </h1>
          <p className="text-slate-300 text-lg md:pr-12 md:text-left text-center md:px-0 px-5">
            Here are what some of our amazing clients are saying about their
            experience with our team. Here are what some of our amazing clients
            are saying about their experience with our team.
          </p>
          <div className="md:hidden rounded-3xl relative">
            <img src={props.image} className="w-fit rounded-md mt-16 mb-12 " />

            <div className="bg-white flex flex-row justify-end gap-4 w-fit ml-auto absolute right-0 bottom-0 px-12 py-6 rounded-tl-[30px]">
              <ChevronLeft
                className="bg-[#fe424c] rounded-full "
                width={40}
                height={40}
                onClick={() => swiper.slidePrev()}
              />
              <ChevronRight
                className="bg-[#fe424c] rounded-full "
                width={40}
                height={40}
                onClick={() => swiper.slideNext()}
              />
            </div>
          </div>
          <div className=" md:text-left text-center mt-20">
            <p className="px-6 md:px-0 md:pr-14 font-semibold text-xl  before:content-['\275D'] before:text-[#fe424c] md:before:text-5xl  before:text-3xl before:mt-9 before:h-fit  after:content-['\275E'] after:text-[#fe424c] md:after:text-5xl before:align-middle after:align-middle  after:text-3xl ">
              {/* <Quote
                className="absolute left-3 md:-left-2 md:w-8 rotate-180 top-1.5 fill-[#fe424c]"
                color="#fe424c"
                size={16}
              /> */}
              {/* &nbsp; &nbsp; */}
              {props.review}
              {/* <Quote
                className="absolute bottom-1.5 right-[19rem] fill-[#fe424c]"
                color="#fe424c"
                size={16}
              /> */}
            </p>

            <div className="flex flex-row gap-4 items-center  md:justify-start justify-center mt-6">
              <img src={props.reviewer} className="w-16 h-16 rounded-full" />
              <div>
                <h1 className="text-[#fe424c] text-2xl w-fit ">{props.name}</h1>
                <h3 className="w-fit text-sm">{props.profession}</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-2/5 md:block hidden relative h-fit  ">
          <img src={props.image} className="w-fit rounded-md " />
          <div className="bg-white flex flex-row justify-end gap-4 w-fit ml-auto absolute right-0 bottom-0 px-12 py-6 rounded-tl-[30px]">
            <ChevronLeft
              className="bg-[#fe424c] rounded-full "
              width={40}
              height={40}
              onClick={() => swiper.slidePrev()}
            />
            <ChevronRight
              className="bg-[#fe424c] rounded-full "
              width={40}
              height={40}
              onClick={() => swiper.slideNext()}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Testemonial;
