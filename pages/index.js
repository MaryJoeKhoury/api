import axios from "@/utils/axios";
import AlignContainer from "@/components/AlignContainer";
import { Card } from "@/components/Card";
import CardContainer from "@/components/CardContainer";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import parse from "html-react-parser";
import { useEffect } from "react";
import { animateBannerMessage, animateHomeCards } from "@/utils/animation";
import CircleBg, { Circle } from "@/components/svgs/CircleBg";
import ScrollUp from "@/components/ScrollUp";

export default function Home({ metas, data, links }) {
  console.log(metas);
  useEffect(() => {
    animateBannerMessage();
  }, []);

  return (
    <>
      <ScrollUp />
      <NavBar image={metas.data.seo_image} />
      <main className=" font-Poppins">
        <AlignContainer>
          <div className="text-white text-center md:text-7xl  md:px-8 mb-36 md:mt-0 mt-16 text-5xl">
            <div className="relative">
              {/* <div className="m-auto absolute top-0 right-0 left-0 bottom-0 "> */}
              <CircleBg id="circle" />
              {/* </div> */}
              <h1
                id="banner"
                className=" absolute top-0 bottom-0 m-auto left-0 right-0 h-fit xs:text-5xl text-4xl  "
              >
                <span>
                  Here is a sneak-peak <br />
                  of our work.
                  <br /> And<span className="text-[#fe424c]"> the best</span> is
                  yet to come!
                  <br />
                  <br />
                </span>
                <span className=" text-[#00a3bb]" id="banner-span">
                  -Stay Tuned-
                </span>
              </h1>
              {/* </CircleBg> */}
            </div>
          </div>
        </AlignContainer>

        <CardContainer>
          {data.data.sections.map((info) => {
            return (
              <Card
                key={info.id}
                image={info.details.image}
                title={info.title}
                description={parse(info.details.text)}
                date={info.details.cta_text}
                link={info.details.cta_link}
                padding="py-8 "
                width="md:w-[45%]"
              />
            );
          })}
        </CardContainer>
      </main>
      <Footer
        linkedin={links.data.social_media.en.Linkedin}
        instagram={links.data.social_media.en.Instagram}
      />
    </>
  );
}

export async function getStaticProps({ locale }) {
  let metas, data, links;
  await axios
    .get("/page/home", {
      headers: {
        "Accept-Language": locale,
      },
    })
    .then((res) => {
      metas = res.data;
    })
    .catch(console.error);

  await axios
    .get("/page/news", {
      headers: {
        "Accept-Language": locale,
      },
    })
    .then((res) => {
      data = res.data;
    })
    .catch(console.error);
  await axios
    .get("/settings", {
      headers: {
        "Accept-Language": locale,
      },
    })
    .then((res) => {
      links = res.data;
    })
    .catch(console.error);
  return { props: { metas, data, links } };
}
