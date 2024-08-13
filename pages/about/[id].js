import React, { useEffect, useState } from "react";
import axios from "@/utils/axios";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { useRouter } from "next/router";
import AlignContainer from "@/components/AlignContainer";
import Link from "next/link";

export default function Page() {
  const router = useRouter();
  const { id } = router.query;
  const [isLoading, setIsLoading] = useState(false);
  const [project, setProject] = useState({});
  const [prevId, setPrevId] = useState({});
  const [nextId, setNextId] = useState({});

  useEffect(() => {
    if (id) {
      setIsLoading(true);
      axios
        .get(`/projects/`)
        .then((response) => {
          const projects = response.data.data;
          const currentIndex = projects.findIndex(
            (project) => project.id == id
          );
          const singleProject = projects[currentIndex];
          setProject(singleProject);
          if (currentIndex > 0) {
            setPrevId(projects[currentIndex - 1].id);
          } else {
            setPrevId(null);
          }

          if (currentIndex < projects.length - 1) {
            setNextId(projects[currentIndex + 1].id);
          } else {
            setNextId(null);
          }
        })
        .finally(() => setIsLoading(false));
    }
  }, [id]);

  if (isLoading) return <p className="text-cyan-700">Loading...</p>;

  return (
    <>
      <NavBar />

      <AlignContainer>
        <div className="text-white flex flex-col items-center justify-center gap-10 flex-wrap max-w-4xl m-auto">
          <img src={project.image} className="rounded-3xl" />
          <h1 className="text-xl">{project.title}</h1>
          <div className="flex md:flex-row md:justify-between font-semibold px-8 flex-col gap-4 ">
            {project.text && (
              <div className="md:text-2xl text-lg md:w-1/2">{project.text}</div>
            )}
            <div className="flex flex-col gap-2 ">
              {project.client && (
                <div className="md:text-2xl text-lg">
                  CLIENT: {project.client}
                </div>
              )}
              {project.directors && (
                <div className="md:text-2xl text-lg">
                  DIRECTOR(S): {project.directors}
                </div>
              )}
              {project.cinematographer && (
                <div className="md:text-2xl text-lg">
                  DP: {project.cinematographer}
                </div>
              )}
              {project.agency && (
                <div className="md:text-2xl text-lg">
                  AGENCY: {project.agency}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="text-white flex flex-row gap-4 items-center mt-8 md:justify-end justify-center font-semibold text-lg">
          {prevId && (
            <>
              <Link href={`/about/${prevId}`} className="hover:underline">
                Previous
              </Link>
              <span className="h-4 border-solid border-[2px] border-white rounded-lg"></span>
            </>
          )}

          <p className="text-gray-500">Our Work</p>

          {nextId && (
            <>
              <span className="h-4 border-solid border-[2px] border-white rounded-lg"></span>
              <Link href={`/about/${nextId}`} className="hover:underline">
                Next
              </Link>
            </>
          )}
        </div>
      </AlignContainer>

      <Footer />
    </>
  );
}
