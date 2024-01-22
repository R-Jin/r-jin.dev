import { PostData } from "@/lib/definitions";
import { format } from "date-fns";
import Link from "next/link";

export default function PostListItem({ postData }: { postData: PostData }) {
  return (
    <Link href={`writings/${postData.id}`}>
      <li className="border-b-[1px] border-foreground/30 px-4 py-8 hover:bg-foreground/5 active:bg-foreground/10">
        <h1 className="font-sans text-2xl font-extrabold text-accent">
          {postData.title}
        </h1>
        <p className="mb-2 font-serif text-xs">
          {format(new Date(postData.date), "do MMMM yyyy")}
        </p>
        <p className="font-serif text-base">{postData.description}</p>
      </li>
    </Link>
  );
}
