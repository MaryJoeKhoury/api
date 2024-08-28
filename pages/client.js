import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import AlignContainer from "@/components/AlignContainer";
import axios from "@/utils/axios";
import Testemonial from "@/components/Testemonial";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { EffectFade, Navigation, Pagination } from "swiper/modules";

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
      <main className=" font-Poppins">
        <AlignContainer>
          <div className="text-white">
            <Swiper
              loop={true}
              navigation={false}
              effect={"fade"}
              modules={[EffectFade, Navigation]}
              fadeEffect={{ crossFade: true }}
              className="mySwiper "
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
      </main>
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
      headers: { "Accept-Language": locale },
    })
    .then((res) => {
      links = res.data;
    })
    .catch(console.error);
  return { props: { metas, links } };
}
