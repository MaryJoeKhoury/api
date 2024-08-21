import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import AlignContainer from "@/components/AlignContainer";
import axios from "@/utils/axios";
import Testemonial from "@/components/Testemonial";

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
  // {
  //   id: 2,
  //   review: "bllalalalalalalalallal",
  //   reviewer: "",
  //   name: "Mary",
  //   profession: "Engineering",
  //   image: "",
  // },
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
          {testemonialInfo.map((info) => (
            <Testemonial
              key={info.id}
              review={info.review}
              reviewer={info.reviewer}
              name={info.name}
              profession={info.profession}
              image={info.image}
            />
          ))}
          {/* <Testemonial /> */}
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
