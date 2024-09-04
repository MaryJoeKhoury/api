import * as React from "react";
const BackToTop = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={40}
    height={40}
    viewBox="0 0 32 32"
    {...props}
    fill="#fe424c"
    className=" bg-white rounded-full md:w-10 md:h-10 h-8 w-8 p-2"
  >
    <title>{"up-to-top"}</title>
    <path d="M16 14 6 24l1.4 1.4 8.6-8.6 8.6 8.6L26 24zM4 8h24v2H4z" />
    <path
      d="M0 0h32v32H0z"
      style={{
        fill: "none",
      }}
    />
  </svg>
);
export default BackToTop;
