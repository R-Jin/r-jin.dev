import { Metadata } from "next";
import PostsList from "@/ui/components/posts/PostsList";
import { getFeaturedProjectsData, getLatestPostsData } from "@/lib/data";

import Profile from "@/ui/components/profile/Profile";
import ProjectsList from "@/ui/components/projects/ProjectsList";

export const metadata: Metadata = {
  title: "R-Jin.dev",
  description: "I am a computer science student based in Gothenburg, Sweden.",
};

export default function Page() {
  const latestPostsData = getLatestPostsData(1);
  const featuredProjectsData = getFeaturedProjectsData();
  return (
    <>
      <div className=" mt-10 md:mt-20">
        <Profile />
      </div>
      <div className=" my-12">
        <h1 className="pb-2 font-sans text-3xl font-bold">About Me</h1>
        <p className="font-serif text-lg">
          Currently, I&apos;m focused on{" "}
          <span className="text-accent"> Web Development </span>
          and <span className="text-accent">Data science and AI</span>. In my
          free time I enjoy playing badminton, reading and exploring the field
          of computer science.
        </p>
      </div>
      <h1 className="mb-2 font-sans text-4xl font-bold">Latest Post</h1>
      <PostsList postsData={latestPostsData} />

      <h1 className="mb-2 mt-10 font-sans text-4xl font-bold">
        Featured Projects
      </h1>
      <ProjectsList projectsData={featuredProjectsData} />
    </>
  );
}
