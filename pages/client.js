import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import AlignContainer from "@/components/AlignContainer";
import axios from "@/utils/axios";
import Testemonial from "@/components/Testemonial";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const testemonialInfo = [
  {
    id: 1,
    review:
      "Here are what some of our amazing clients are saying about their experience with our team. Here are what some of our amazing clients are saying about their experience with our team.",
    reviewer: "/images/art.jpg",
    name: "Mary Joe",
    profession: "Engineering",
    image: "/images/hotel.jpg",
  },
  {
    id: 2,
    review:
      "Here are what some of our amazing clients are saying about their experience with our team.",
    reviewer: "/images/donut.jpg",
    name: " Joe",
    profession: "Artist",
    image: "/images/donut.jpg",
  },
  // {
  //   id: 3,
  //   review: "bllalalalalalalalallal",
  //   reviewer: "",
  //   name: "Mary",
  //   profession: "Engineering",
  //   image: "",
  // },
  // {
  //   id: 4,
  //   review: "bllalalalalalalalallal",
  //   reviewer: "",
  //   name: "Mary",
  //   profession: "Engineering",
  //   image: "",
  // },
  // {
  //   id: 5,
  //   review: "bllalalalalalalalallal",
  //   reviewer: "",
  //   name: "Mary",
  //   profession: "Engineering",
  //   image: "",
  // },
];

export default function Client({ metas, links }) {
  return (
    <>
      <NavBar image={metas.data.seo_image} />
      <AlignContainer>
        <div className="text-white">
          {/* <h3 className="text-2xl text-[#fe424c] md:text-left text-center">
            Testemonials
          </h3>
          <h1 className="md:text-5xl text-3xl font-bold my-6 md:text-left text-center">
            Our Clients <span className="text-[#fe424c]">Love Us.</span>
          </h1>
          <p className="text-slate-300 text-lg md:pr-12 md:text-left text-center md:px-0 px-5">
            Here are what some of our amazing clients are saying about their
            experience with our team. Here are what some of our amazing clients
            are saying about their experience with our team.
          </p> */}
          <Swiper
            loop={true}
            navigation={false}
            modules={[Navigation]}
            className="mySwiper"
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              480: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 1,
              },
              1280: {
                slidesPerView: 1,
              },
            }}
          >
            {testemonialInfo.map((info) => (
              <SwiperSlide>
                <Testemonial
                  key={info.id}
                  review={info.review}
                  reviewer={info.reviewer}
                  name={info.name}
                  profession={info.profession}
                  image={info.image}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </AlignContainer>

      <Footer
        linkedin={links.data.social_media.en.Linkedin}
        instagram={links.data.social_media.en.Instagram}
      />
    </>
  );
}

export async function getStaticProps({ locale }) {
  let metas, links;
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
    .get("/settings", {
      headers: {
        "Accept-Language": locale,
      },
    })
    .then((res) => {
      links = res.data;
    })
    .catch(console.error);
  return { props: { metas, links } };
}
