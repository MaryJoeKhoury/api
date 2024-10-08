import { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Accordion from "@/components/Accordion";
import AlignContainer from "@/components/AlignContainer";
import CardContainer from "@/components/CardContainer";
import { Card } from "@/components/Card";
import axios from "@/utils/axios";
import ScrollUp from "@/components/ScrollUp";

const accordionInfo = [
  {
    id: "1",
    title: "Mary Joe",
    details: " Software Engineer",
  },
  {
    id: "2",
    title: "Mary Joe",
    details: " Software Engineer",
  },
  {
    id: "3",
    title: "Mary Joe",
    details: " Software Engineer",
  },
  {
    id: "4",
    title: "Mary Joe",
    details: " Software Engineer",
  },
];

const cardInfo = [
  { id: "1", image: "/images/coding.webp", title: "coding", type: "tech" },
  { id: "2", image: "/images/coding.webp", title: "coding", type: "tech" },
  { id: "3", image: "/images/music-hero.jpg", title: "music", type: "music" },
  { id: "4", image: "/images/starry-night.jpg", title: "art", type: "art" },
  {
    id: "5",
    image: "/images/different_sports.jpg",
    title: "sport",
    type: "sport",
  },
  {
    id: "6",
    image: "/images/different_sports.jpg",
    title: "sport",
    type: "sport",
  },
  { id: "7", image: "/images/coding.webp", title: "coding", type: "tech" },
  { id: "8", image: "/images/coding.webp", title: "coding", type: "tech" },
  { id: "9", image: "/images/music-hero.jpg", title: "music", type: "music" },
  { id: "10", image: "/images/art.jpg", title: "art", type: "art" },
  {
    id: "11",
    image: "/images/different_sports.jpg",
    title: "sport",
    type: "sport",
  },
  {
    id: "12",
    image: "/images/different_sports.jpg",
    title: "sport",
    type: "sport",
  },
  {
    id: "13",
    image: "/images/different_sports.jpg",
    title: "sport",
    type: "sport",
  },
  { id: "14", image: "/images/coding.webp", title: "coding", type: "tech" },
  { id: "15", image: "/images/coding.webp", title: "coding", type: "tech" },
  { id: "16", image: "/images/music-hero.jpg", title: "music", type: "music" },
  { id: "17", image: "/images/art.jpg", title: "art", type: "art" },
  {
    id: "18",
    image: "/images/different_sports.jpg",
    title: "sport",
    type: "sport",
  },
  {
    id: "19",
    image: "/images/different_sports.jpg",
    title: "sport",
    type: "sport",
  },
];

export default function Team({ metas, links }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const [filteredType, setFilteredType] = useState(cardInfo);
  const [selectedType, setSelectedType] = useState("all");
  // const [displayedData, setDisplayedData] = useState(filteredType);
  const [visibleItemCount, setVisibleItemCount] = useState(6);

  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    setFilteredType(cardInfo);
  }, []);

  const handleType = (e) => {
    let type = e.target.value;
    setSelectedType(type);
    setVisibleItemCount(6);
    if (type === "all") return setFilteredType(cardInfo);

    const filteredData = cardInfo.filter(
      (cardInfo) => cardInfo.type.toLowerCase() === type.toLowerCase()
    );

    setFilteredType(filteredData);
  };
  const handleViewMore = () => {
    setVisibleItemCount((prevCount) => prevCount + 6);
    // setDisplayedData(filteredType.slice(0, visibleItemCount + 5));
  };
  return (
    <>
      <ScrollUp />
      <NavBar image={metas.data.seo_image} />
      <main className=" font-Poppins">
        {accordionInfo.map((info) => (
          <Accordion
            key={info.id}
            title={info.title}
            details={info.details}
            isOpen={activeIndex === info.id}
            onClick={() => handleItemClick(info.id)}
          />
        ))}
        <AlignContainer>
          <h1 className="text-white text-4xl text-center mt-16 mb-8">
            Categories
          </h1>
          <div className="text-white flex flex-row text-2xl sm:justify-between justify-normal my-8 flex-wrap gap-8 ">
            <button
              className={`${
                selectedType === "all"
                  ? "cursor-pointer border-b-4 border-solid border-white px-4 ease-in-out duration-150"
                  : "cursor-pointer  text-gray-400 border-b-4 border-solid border-gray-400 ease-in-out duration-150"
              }`}
              value="all"
              onClick={handleType}
            >
              All Categories
            </button>

            <button
              className={`${
                selectedType === "tech"
                  ? "cursor-pointer border-b-4 border-solid border-white px-4 ease-in-out duration-150"
                  : "cursor-pointer  text-gray-400 border-b-4 border-solid border-gray-400 ease-in-out duration-150"
              }`}
              value="tech"
              onClick={handleType}
            >
              Tech
            </button>
            <button
              className={`${
                selectedType === "art"
                  ? "cursor-pointer border-b-4 border-solid border-white px-4 ease-in-out duration-150"
                  : "cursor-pointer  text-gray-400 border-b-4 border-solid border-gray-400 ease-in-out duration-150"
              }`}
              value="art"
              onClick={handleType}
            >
              Art
            </button>
            <button
              className={`${
                selectedType === "sport"
                  ? "cursor-pointer border-b-4 border-solid border-white px-4 ease-in-out duration-150"
                  : "cursor-pointer  text-gray-400 border-b-4 border-solid border-gray-400 ease-in-out duration-150"
              }`}
              value="sport"
              onClick={handleType}
            >
              Sport
            </button>
            <button
              className={`${
                selectedType === "music"
                  ? "cursor-pointer border-b-4 border-solid border-white px-4 ease-in-out duration-150"
                  : "cursor-pointer  text-gray-400 border-b-4 border-solid border-gray-400 ease-in-out duration-150 "
              }`}
              value="music"
              onClick={handleType}
            >
              Music
            </button>
          </div>
        </AlignContainer>
        <CardContainer>
          {filteredType.slice(0, visibleItemCount).map((info) => (
            <Card
              key={info.id}
              image={info.image}
              title={info.title}
              margin="m-auto"
              padding="md:mt-8 p-0"
              size="xl:w-[570px] xl:h-[300px] sm:w-full sm:h-[300px] md:h-[195px] md:w-[350px] lg:w-[450px] lg:h-[295px]  w-full h-[180px]"
            />
          ))}
        </CardContainer>
        {visibleItemCount < filteredType.length && (
          <div className="w-fit m-auto" onClick={handleViewMore}>
            <button
              type="button"
              className="bg-[#fe424c] px-4 py-2 rounded-md text-white hover:bg-opacity-70 "
            >
              View More
            </button>
          </div>
        )}
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

  await axios;

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
