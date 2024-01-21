import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/posts/public");

type PostInfo = {
  id: string;
  title: string;
  description: string;
  date: Date | string;
};

function getPostInfo(filename: string): PostInfo {
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

export function getAllPostsInfo() {
  const filenames = fs.readdirSync(postsDirectory);

  const allPostsData = filenames.map((filename) => getPostInfo(filename));

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
