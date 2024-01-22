import { Metadata } from "next";
import PostsList from "@/ui/components/posts/PostsList";
import { getLatestPostsData } from "@/lib/data";

import Profile from "@/ui/components/profile/Profile";

export const metadata: Metadata = {
  title: "R-Jin.dev",
  description: "I am a computer science student based in Gothenburg, Sweden.",
};

export default function Page() {
  const latestPosts = getLatestPostsData(1);
  return (
    <>
      <Profile />
      <div className=" my-16">
        <h1 className="pb-2 font-sans text-3xl font-bold">About Me</h1>
        <p className="font-serif text-lg">
          Currently, I&apos;m focused on{" "}
          <span className="text-accent"> Web Development </span>
          and <span className="text-accent">Data science and AI</span>. In my
          free time I enjoy playing badminton, reading and exploring the field
          of computer science.
        </p>
      </div>
      <h1 className="font-sans text-4xl font-bold">Latest Posts</h1>
      <PostsList postsData={latestPosts} />

      <h1 className="my-6 font-sans text-4xl font-bold">Featured Projects</h1>
    </>
  );
}
