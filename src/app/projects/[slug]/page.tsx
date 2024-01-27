import { getAllProjectSlugs, getProjectPage } from "@/lib/data";
import { format } from "date-fns";
import Content from "@/ui/components/markdown/Content";

export default function Page({ params }: { params: { slug: string } }) {
  const pageData = getProjectPage(`${params.slug}.md`);
  return (
    <>
      <h1 className="mt-10 font-sans text-3xl font-extrabold text-accent md:text-4xl">
        {pageData.title}
      </h1>
      <p className="my-2 font-serif">
        {format(new Date(pageData.date), "do MMMM yyyy")}
      </p>
      <Content content={pageData.content} />
    </>
  );
}

export function generateStaticParams() {
  const posts = getAllProjectSlugs();

  return posts.map((slug) => ({
    slug,
  }));
}
