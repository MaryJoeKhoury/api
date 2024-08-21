import { useState } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import AlignContainer from "@/components/AlignContainer";
import axios from "@/utils/axios";
import Modal from "@/components/Modal";
import { Fullscreen } from "lucide-react";

export default function Work({ metas, links }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <NavBar image={metas.data.seo_image} />

      {/* <h1 className="text-white md:text-5xl text-3xl text-center my-28">
          COMING SOON...
        </h1> */}
      <div className="relative mb-8">
        <img src="/images/cam.webp" className="opacity-80 w-full h-full" />
        <button
          type="button"
          onClick={() => setShowModal(true)}
          className="text-white bg-[#fe424c]  hover:underline absolute md:px-8 px-4 text-lg py-2 rounded-lg left-0 right-0 m-auto w-fit top-0 bottom-0 h-fit"
        >
          Click
        </button>
        {showModal && <Modal onClose={() => setShowModal(false)} />}
      </div>

      <AlignContainer>
        {/* <div className="bg-white m-auto w-fit"> */}
        <iframe
          src="https://www.youtube.com/embed/RHqbNanuuH9ApOhk"
          width={500}
          frameborder="0"
          allowfullscreen
          loading="lazy"
        ></iframe>
        <div className="mt-8">
          <video width="full" height="full" controls preload="none">
            <source src="/videos/video.mp4" type="video/mp4" />
            <track
              src="/path/to/captions.vtt"
              kind="subtitles"
              srcLang="en"
              label="English"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        {/* </div> */}
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
