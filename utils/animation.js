import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animateBannerMessage = () => {
  const bannerMessage = document.getElementById("banner");
  const bannerSpan = document.getElementById("banner-span");

  gsap.fromTo(
    [bannerMessage],
    { scale: 0, rotation: 0 },
    { scale: 1, rotation: 360, duration: 1 }
  );
  gsap.fromTo(
    "#circle",
    { rotation: 360, x: -700, duration: 0.5, y: -200 },
    { rotation: 0, x: 0, duration: 1, y: 0 }
  );
};

// export const animateCards = () => {
// let revealContainers = document.querySelectorAll(".card-reveal");
// revealContainers.forEach((container) => {
//   let image = document.querySelector(".card-image");
//   let tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: container,
//       toggleActions: "restart none none reset",
//     },
//   });
//   tl.set(container, { autoAlpha: 1 });
//   tl.from(".card-container", 1.5, {
//     xPercent: -100,
//     ease: "power2.inOut",
//   });
//   tl.from(image, 1.5, {
//     xPercent: 0,
//     scale: 1.3,
//     delay: -1.5,
//     ease: "power2.inOut",
//   });
// });
// gsap.to(".card-container", { x: 0, fill: "blue" });
// gsap.to(".card-container", {
//   y: 100,
//   stagger: 0.52,
// });
// gsap.to(".card-container", {
//   duration: 1,
//   scale: 0.1,
//   y: 40,
//   ease: "power1.inOut",
//   stagger: {
//     grid: [7, 15],
//     from: "center",
//     amount: 1,
//   },
// });

export const animateCards = () => {
  gsap.fromTo(
    ".card-container",
    { scale: 0 },
    {
      scale: 1,
      y: 0,
      duration: 0.5,
      ease: "power1.inOut",
      stagger: {
        grid: [7, 15],
        from: "center",
        amount: 1,
      },
      scrollTrigger: {
        trigger: ".cards",
        start: "top 95%",
        toggleActions: "play none none none ",
      },
    }
  );
};
