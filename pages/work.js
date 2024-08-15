import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import AlignContainer from "@/components/AlignContainer";
import axios from "@/utils/axios";

export default function Work({ metas, links }) {
  return (
    <>
      <NavBar image={metas.data.seo_image} />
      <AlignContainer>
        <h1 className="text-white text-5xl text-center my-28">
          COMING SOON...
        </h1>
      </AlignContainer>

      <Footer
        linkedin={links.data.social_media.en.Linkedin}
        instagram={links.data.social_media.en.Instagram}
      />
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
