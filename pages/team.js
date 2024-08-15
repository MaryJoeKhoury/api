import { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Accordion from "@/components/Accordion";
import AlignContainer from "@/components/AlignContainer";
import CardContainer from "@/components/CardContainer";
import { Card } from "@/components/Card";

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
  { id: "3", image: "/images/coding.webp", title: "music", type: "music" },
  { id: "4", image: "/images/coding.webp", title: "art", type: "art" },
  { id: "5", image: "/images/coding.webp", title: "sport", type: "sport" },
];

export default function Team() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [filteredType, setFilteredType] = useState(cardInfo);
  const [selectedType, setSelectedType] = useState("all");
  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    setFilteredType(cardInfo);
  }, []);

  const handleType = (e) => {
    let type = e.target.value;
    setSelectedType(type);
    if (type === "all") return setFilteredType(cardInfo);

    const filteredData = cardInfo.filter(
      (cardInfo) => cardInfo.type.toLowerCase() === type.toLowerCase()
    );

    setFilteredType(filteredData);
  };

  return (
    <div className="">
      <NavBar />

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
        <div className="text-white flex flex-row text-2xl md:justify-between my-8 flex-wrap gap-8 ">
          <button
            className={`${
              selectedType === "all"
                ? "cursor-pointer border-b-4 border-solid border-white px-8 ease-in-out duration-150"
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
                ? "cursor-pointer border-b-4 border-solid border-white px-8 ease-in-out duration-150"
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
                ? "cursor-pointer border-b-4 border-solid border-white px-8 ease-in-out duration-150"
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
                ? "cursor-pointer border-b-4 border-solid border-white px-8 ease-in-out duration-150"
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
                ? "cursor-pointer border-b-4 border-solid border-white px-8 ease-in-out duration-150"
                : "cursor-pointer  text-gray-400 border-b-4 border-solid border-gray-400 ease-in-out duration-150"
            }`}
            value="music"
            onClick={handleType}
          >
            Music
          </button>
        </div>
        <CardContainer>
          {filteredType.map((info) => (
            <Card
              key={info.id}
              image={info.image}
              title={info.title}
              margin="m-auto"
            />
          ))}
        </CardContainer>
      </AlignContainer>
      <Footer />
    </div>
  );
}
