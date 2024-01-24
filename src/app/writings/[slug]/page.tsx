import { getAllPostsData } from "@/lib/data";

export default function Page({ params }: { params: { slug: string } }) {
  return <div>My Post: {params.slug}</div>;
}

export function generateStaticParams() {
  const posts = getAllPostsData();

  return posts.map((post) => ({
    slug: post.id,
  }));
}
