import React, { useEffect, useState } from "react";
import BackToTop from "./svgs/BackToTop";

const ScrollUp = () => {
  const [button, setButton] = useState(false);

  useEffect(() => {
    const makeButtonVisible = () => {
      const isVisible = window.scrollY > 10; // Adjust threshold as needed
      setButton(isVisible);
    };

    window.addEventListener("scroll", makeButtonVisible);
    return () => window.removeEventListener("scroll", makeButtonVisible); // Corrected cleanup
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <button
        className={
          button
            ? "fixed bottom-2 right-2 z-10 hover:opacity-70 duration-150"
            : "hidden scale-0"
        }
        onClick={() => scrollToTop()}
      >
        <BackToTop />
      </button>
    </div>
  );
};

export default ScrollUp;
