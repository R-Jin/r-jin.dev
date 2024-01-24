import { getAllPostSlugs, getPostPage } from "@/lib/data";
import { format } from "date-fns";

export default function Page({ params }: { params: { slug: string } }) {
  const pageData = getPostPage(`${params.slug}.md`);
  return (
    <>
      <h1 className="mt-10 font-sans text-3xl font-extrabold md:text-4xl">
        {pageData.title}
      </h1>
      <p className="mt-2 font-serif">
        {format(new Date(pageData.date), "do MMMM yyyy")}
      </p>
    </>
  );
}

export function generateStaticParams() {
  const posts = getAllPostSlugs();

  return posts.map((slug) => ({
    slug,
  }));
}
