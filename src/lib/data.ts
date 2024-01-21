import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { PostData } from "./definitions";

const postsDirectory = path.join(process.cwd(), "content/posts/public");

function getPostData(filename: string): PostData {
  // ID for the posts
  const id = filename.replace(/\.md$/, "");

  const fullPath = path.join(postsDirectory, filename);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const postInfo = matter(fileContents).data;
  return {
    id,
    title: postInfo.title || "",
    description: postInfo.description || "",
    date: new Date(postInfo.date) || "",
  };
}

export function getAllPostsData() {
  const filenames = fs.readdirSync(postsDirectory);

  const allPostsData = filenames.map((filename) => getPostData(filename));

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
