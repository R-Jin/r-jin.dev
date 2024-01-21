import { getAllPostsData } from "@/lib/data";
import { Metadata } from "next";
import PostsList from "@/ui/components/posts/PostsList";

export const metadata: Metadata = {
  title: "Writings",
  description:
    "Here I will write about anything I find interesting throughout my day-to-day life.",
};

export default function Page() {
  const postsData = getAllPostsData();

  return (
    <main>
      <h1 className="mt-20 text-3xl font-extrabold md:mt-20 md:text-6xl">
        Writings
      </h1>
      <p className="mb-10 mt-5 font-serif text-lg md:text-2xl">
        Here I will write about anything I find interesting throughout my
        day-to-day life.
      </p>
      <PostsList postsData={postsData} />
    </main>
  );
}
