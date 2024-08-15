import React, { useEffect, useRef, useState } from "react";
import axios from "@/utils/axios";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import parse from "html-react-parser";
import FlipCard from "@/components/FlipCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export default function About({ data, metas }) {
  const [swiperRef, setSwiperRef] = useState(null);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get("/projects").then((response) => setPosts(response.data.data));
  }, []);
  return (
    <>
      <NavBar image={metas.data.seo_image} />
      <Swiper
        loop={true}
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
        {posts.map((post) => {
          return (
            <SwiperSlide>
              <FlipCard
                key={post.id}
                image={post.image}
                title={post.title}
                description={post.description}
                text={post.text}
                link={`/about/${post.id}`}
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
