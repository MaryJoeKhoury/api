import { useState } from "react";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Accordion from "@/components/Accordion";

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

export default function Team() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
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

      <Footer />
    </div>
  );
}
