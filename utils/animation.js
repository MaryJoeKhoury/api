import gsap from "gsap";
// import { SplitText } from "gsap-trial/SplitText";
// import { SplitText } from "gsap-trial/SplitText";
// gsap.registerPlugin(SplitText);
export const animateBannerMessage = () => {
  const bannerMessage = document.getElementById("banner");
  const bannerSpan = document.getElementById("banner-span");
  // let myText = new SplitText("#banner");

  // gsap.fromTo([bannerMessage], { x: -500, y: -100 }, { x: 0, y: 0 });
  // gsap.from([bannerSpan], { x: -40,  });
  gsap.fromTo(
    [bannerMessage],
    { rotation: 360, x: -500, duration: 1, y: -100 },
    { rotation: 0, x: 0, duration: 1, y: 0 }
  );
};
