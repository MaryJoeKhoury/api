import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import AlignContainer from "@/components/AlignContainer";
import Map from "@/components/svgs/Map";
import Phone from "@/components/svgs/Phone";
import Email from "@/components/svgs/Email";
import axios from "@/utils/axios";
import { useEffect } from "react";
import { animateTextImage } from "@/utils/animation";
import Image from "next/image";

export default function Contact({ metas, links }) {
  useEffect(() => {
    animateTextImage();
  });
  return (
    <>
      <NavBar image={metas.data.seo_image} />

      <main className=" font-Poppins">
        <AlignContainer>
          <div className="text-white flex md:flex-row md:justify-between my-12 flex-col md:items-stretch items-center gap-12 ">
            <div className="md:w-1/2">
              <h1 className="md:text-5xl text-4xl mb-12 decoration-wavy">
                Let's Get <span className=" text-[#fe424c]">In Touch!</span>
              </h1>
              <ul className="flex flex-col gap-12">
                <li className="flex flex-row gap-4 items-center md:pr-8">
                  <Map />
                  198 West 21th Street, Suite 721 New York NY 10016
                </li>
                <li className="flex flex-row gap-4 items-center group w-fit">
                  <a href="tel:+1235 2355 98">
                    <Phone />
                  </a>
                  <a
                    href="tel:+1235 2355 98"
                    className=" relative before:absolute before:w-full before:content-[''] before:bg-white before:h-[2px] before:rounded-md before:bottom-0 before:left-0 before:origin-right before:scale-x-0 before:transition-transform  group-hover:before:origin-left group-hover:before:scale-x-100 "
                  >
                    +1235 2355 98
                  </a>
                </li>
                <li className="flex flex-row gap-4 items-center group w-fit">
                  <a href="mailto:info@yoursite.com">
                    <Email />
                  </a>
                  <a
                    href="mailto:info@yoursite.com"
                    className=" relative before:absolute before:w-full before:content-[''] before:bg-white before:h-[2px] before:rounded-md before:bottom-0 before:left-0 before:origin-right before:scale-x-0 before:transition-transform  group-hover:before:origin-left group-hover:before:scale-x-100 "
                  >
                    info@yoursite.com
                  </a>
                </li>
              </ul>
            </div>

            <form className="flex flex-col justify-between md:w-1/2 sm:w-3/5 w-full  gap-4 ">
              <div className="flex lg:flex-row justify-between flex-col gap-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className=" p-2 rounded-sm outline-none  bg-transparent border-solid border-2 border-white lg:w-1/2 w-full"
                />
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="p-2 rounded-sm outline-none  bg-transparent border-solid border-2 border-white lg:w-1/2 w-full"
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="p-2 rounded-sm outline-none bg-transparent border-solid border-2 border-white"
              />

              <textarea
                name="message"
                placeholder="Message"
                required
                className="h-28 p-2 rounded-sm outline-none bg-transparent border-white border-solid border-2"
              />
              <input
                type="submit"
                name="button"
                placeholder="Submit"
                className="bg-[#fe424c] cursor-pointer outline-none w-fit mx-auto px-4 py-2  rounded-lg text-white hover:bg-opacity-50"
              />
            </form>
          </div>
          <div className="text-white flex md:flex-row gap-8 items-center md:flex-nowrap flex-col-reverse justify-center mt-28">
            <div className="md:w-1/2" id="box">
              {/* <img src="/images/art.jpg" /> */}
              <Image
                src="/images/art.jpg"
                width={1000}
                height={1000}
                alt="review image"
                className="w-fit "
              />
            </div>
            <div className="md:w-1/2" id="box">
              <h1 className="lg:text-5xl text-4xl  text-center mb-12">
                Let's <span className=" text-[#fe424c]">Collaborate</span>
              </h1>
              <p className="text-2xl text-center md:text-justify before:content-['\275D'] before:text-[#fe424c] md:before:text-4xl  before:text-3xl before:mt-9 before:h-fit  after:content-['\275E'] after:text-[#fe424c] md:after:text-4xl before:align-middle after:align-middle  after:text-3xl before:mr-1 after:ml-1">
                Have a vision or an idea that needs to be brought to life? We're
                here to turn your concepts into cinematic experiences. Whether
                you're a seasoned filmmaker or just starting out, our team is
                passionate about storytelling and ready to collaborate with you
                on your next project. Reach out to us, and let's make something
                unforgettable together!
              </p>
            </div>
          </div>
          <div
            className="text-white flex flex-row gap-8 items-center md:flex-nowrap flex-wrap justify-center md:mt-28 mt-14"
            id="container"
          >
            <div className="md:w-1/2" id="box2">
              <h1 className="lg:text-5xl text-4xl  text-center mb-12">
                Visit Our <span className=" text-[#fe424c]">Studio</span>
              </h1>
              <p className="text-2xl md:text-justify text-center before:content-['\275D'] before:text-[#fe424c] md:before:text-4xl  before:text-3xl before:mt-9 before:h-fit  after:content-['\275E'] after:text-[#fe424c] md:after:text-4xl before:align-middle after:align-middle  after:text-3xl before:mr-1 after:ml-1">
                Our doors are open to filmmakers, storytellers, and creative
                minds alike. Located in the heart of
                <span className=" text-[#fe424c]"> "City"</span>, our
                state-of-the-art studio is equipped with everything you need to
                bring your vision to the screen. Schedule a visit, and explore
                where the magic happens. We're excited to welcome you to our
                creative space!
              </p>
            </div>
            <div className="md:w-1/2" id="box2">
              {/* <img src="/images/starry-night.jpg" /> */}
              <Image
                src="/images/starry-night.jpg"
                width={1000}
                height={1000}
                alt="review image"
                className="w-fit "
              />
            </div>
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
