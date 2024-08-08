import React, { useRef, useState } from "react";
import axios from "@/utils/axios";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import parse from "html-react-parser";
import FlipCard from "@/components/FlipCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// import "./styles.css";
import { Navigation } from "swiper/modules";

export default function ({ data }) {
  console.log(data);
  const [swiperRef, setSwiperRef] = useState(null);
  return (
    <>
      <NavBar />
      <Swiper
        // slidesPerView={4}
        // spaceBetween={20}
        loop={true}
        loopedSlides={4}
        navigation={false}
        modules={[Navigation]}
        className="mySwiper"
        breakpoints={{
          320: {
            slidesPerView: 1.3,
            spaceBetween: 14,
          },
          480: {
            slidesPerView: 1.4,
            // spaceBetween: 30,
          },
          640: {
            slidesPerView: 2.2,
            spaceBetween: 30,
            navigation: false,
          },
          768: {
            slidesPerView: 2.4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2.4,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 2.4,
            spaceBetween: 20,
          },
        }}
      >
        {data.data.map((info) => {
          return (
            <SwiperSlide>
              <FlipCard
                key={info.id}
                image={info.image}
                title={info.title}
                description={info.description}
                text={info.text}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Footer />
    </>
  );
}

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
