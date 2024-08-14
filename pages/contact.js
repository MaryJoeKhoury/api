import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import AlignContainer from "@/components/AlignContainer";
import Map from "@/components/svgs/Map";
import Phone from "@/components/svgs/Phone";
import Email from "@/components/svgs/Email";

export default function Contact() {
  return (
    <>
      <NavBar />
      <AlignContainer>
        <div className="text-white flex md:flex-row md:justify-between my-12 flex-col md:items-stretch items-center gap-12">
          <div className="md:w-1/2">
            <h1 className="text-5xl mb-12 decoration-wavy">
              Let's Get In Touch!
            </h1>
            <ul className="flex flex-col gap-12">
              <li className="flex flex-row gap-4 items-center md:pr-8">
                <Map />
                198 West 21th Street, Suite 721 New York NY 10016
              </li>
              <li>
                <a
                  href="tel:+1235 2355 98"
                  className="flex flex-row gap-4 items-center"
                >
                  <Phone />
                  +1235 2355 98
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@yoursite.com"
                  className="flex flex-row gap-4 items-center"
                >
                  <Email />
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
      </AlignContainer>

      <Footer />
    </>
  );
}
