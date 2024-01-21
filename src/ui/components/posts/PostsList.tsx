import { PostData } from "@/lib/definitions";
import PostListItem from "./PostListItem";

export default function PostsList({ postsData }: { postsData: PostData[] }) {
  return (
    <ul>
      {postsData.map((postData) => (
        <div key={postData.id}>
          <PostListItem postData={postData} />
        </div>
      ))}
    </ul>
  );
}
