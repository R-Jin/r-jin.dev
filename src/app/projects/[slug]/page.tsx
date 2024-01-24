import { getAllProjectPages } from "@/lib/data";
import { format } from "date-fns";

export default function Page({ params }: { params: { slug: string } }) {
  return <div>My Post: {params.slug}</div>;
}

export function generateStaticParams() {
  const posts = getAllProjectPages();

  return posts.map((post) => ({
    slug: post.id,
    title: post.title,
    date: format(post.date, "do MMMM yyyy"),
    content: post.content,
  }));
}
