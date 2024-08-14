import * as React from "react";
const Map = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
    width={30}
    height={30}
  >
    <path
      stroke="#fe424c"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m9 20-6-3V4l6 3m0 13 6-3m-6 3V7m6 10 6 3V7l-6-3m0 13V4M9 7l6-3"
    />
  </svg>
);
export default Map;
