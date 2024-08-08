import axios from "@/utils/axios";
import AlignContainer from "@/components/AlignContainer";
import { Card } from "@/components/Card";
import CardContainer from "@/components/CardContainer";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import parse from "html-react-parser";

export default function Home({ data }) {
  console.log(data);

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
        {data.data.sections.map((info) => {
          return (
            <Card
              key={info.id}
              image={info.details.image}
              title={info.title}
              description={parse(info.details.text)}
              date={info.details.cta_text}
              link={info.details.cta_link}
            />
          );
        })}
      </CardContainer>
      <Footer />
    </>
  );
}

export async function getStaticProps({ locale }) {
  let data;
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
  return { props: { data } };
}
