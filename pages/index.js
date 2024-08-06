import AlignContainer from "@/components/AlignContainer";
import { Card } from "@/components/Card";
import CardContainer from "@/components/CardContainer";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

const cardInfo = [
  {
    id: 1,
    image: "/images/donut.jpg",
    title: "Dunkin' Donuts",
    description: "Delicious",
    link: "https://www.dunkindonuts.com/en/menu",
  },
  {
    id: 2,
    image: "/images/hotel.jpg",
    title: "Hotel",
    description: "5 Stars",
    link: "https://www.trivago.com/",
  },
  {
    id: 3,
    image: "/images/mcd.jpg",
    title: "MacDonald's",
    description: "Best Food in Town",
    link: "https://www.mcdonalds.com.lb/en/home",
  },
  {
    id: 2,
    image: "/images/hotel.jpg",
    title: "Hotel",
    description: "5 Stars",
  },
  {
    id: 2,
    image: "/images/hotel.jpg",
    title: "Hotel",
    description: "5 Stars",
  },
  {
    id: 3,
    image: "/images/mcd.jpg",
    title: "MacDonald's",
    description: "Best Food in Town",
  },
  {
    id: 3,
    image: "/images/mcd.jpg",
    title: "MacDonald's",
    description: "Best Food in Town",
  },
  {
    id: 1,
    image: "/images/donut.jpg",
    title: "Dunkin' Donuts",
    description: "Delicious",
  },
];

export default function Home() {
  return (
    <>
      <NavBar />
      <AlignContainer>
        <div className="text-white text-center md:text-7xl  md:px-8 mb-36 mt-16 text-5xl">
          <h1>
            Here is a sneak-peak <br />
            of our work.
            <br /> And<span className="text-[#fe424c]"> the best</span> is yet
            to come!
            <br />
            <br />
            <span className=" text-[#00a3bb]">-Stay Tuned-</span>
          </h1>
        </div>
      </AlignContainer>

      <CardContainer>
        {cardInfo.map((info) => (
          <Card
            image={info.image}
            title={info.title}
            description={info.description}
            link={info.link}
          />
        ))}
      </CardContainer>
      <Footer />
    </>
  );
}
