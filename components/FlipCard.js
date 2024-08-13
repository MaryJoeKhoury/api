import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const FlipCard = (props) => {
  const router = useRouter;
  return (
    <div>
      <Link href={props.link}>
        <div className="relative group">
          <img src={props.image} className="opacity-50" />
          <h1 className="text-white absolute m-auto left-0 right-0 lg:top-2/4 md:top-1/4 top-[30%] md:text-3xl text-xl  text-center ">
            {props.title}
          </h1>
          <h3 className="text-white absolute m-auto left-0 right-0 top-0   md:text-xl text-lg text-center ">
            {props.description}
          </h3>
          <div className="text-white absolute m-auto  right-4 bottom-0 text-lg  text-center ">
            <h1 className="relative after:absolute after:h-[2px] after:w-0 after:-bottom-0 after:right-0 after:left-0 after:m-auto after:bg-[#fe424c] after:rounded-md group-hover:after:w-full translate-x-1 duration-150 hover:text-white  after:duration-150">
              See More
            </h1>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default FlipCard;
export async function getStaticProps({ locale }) {
  let data;
  await axios
    .get("/projects", {
      headers: {
        "Accept-Language": locale,
      },
    })
    .then((res) => {
      data = res.data;
    })
    .catch(console.error);
  return { props: { data } };
}
