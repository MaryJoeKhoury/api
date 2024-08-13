import React, { useEffect, useState } from "react";
import axios from "@/utils/axios";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { useRouter } from "next/router";
import AlignContainer from "@/components/AlignContainer";

export default function Page({ data }) {
  const router = useRouter();
  console.log(router);
  const { id } = router.query;
  const [isLoading, setIsLoading] = useState(false);
  const [post, setPost] = useState({});

  useEffect(() => {
    if (id) {
      setIsLoading(true);
      axios
        .get(`/projects/`)
        .then((response) => {
          const singlePost = response.data.data.find((post) => post.id == id);
          setPost(singlePost);
        })
        .finally(() => setIsLoading(false));
    }
  }, [id]);

  if (isLoading) return <p className="text-cyan-700">Loading...</p>;

  return (
    <>
      <NavBar />

      <AlignContainer>
        <div className="text-white flex flex-col items-center justify-center gap-10 flex-wrap">
          {/* <div>{post.vimeo_id}</div> */}
          <div className="flex flex-row justify-between flex-wrap">
            <div className="text-2xl w-1/2">{post.text}</div>
            <div className="flex flex-col ">
              <div className="text-2xl">
                <span className="text-[#00a3bb]">Client</span>:{post.client}
              </div>
              <div className="text-2xl">
                <span className="text-[#00a3bb]">Directors</span>:
                {post.directors}
              </div>
              <div className="text-2xl">
                <span className="text-[#00a3bb]">Agency</span>:{post.agency}
              </div>
            </div>
          </div>
          <div className="text-[#fe424c] text-4xl">Extra data</div>
          <div>
            <div>{post.cinematographer}</div>
            <div>{post.colorist}</div>
            <div>{post.seo_title}</div>
            <div>{post.seo_description}</div>
          </div>
        </div>
      </AlignContainer>

      <Footer />
    </>
  );
}
