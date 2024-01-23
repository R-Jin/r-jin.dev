import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { PostData, ProjectData } from "./definitions";

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

export function getLatestPostsData(number: number) {
  return getAllPostsData().slice(0, number);
}

function getProjectsData(filename: string, directory: string) {
  // ID for the posts
  const id = filename.replace(/\.md$/, "");

  const thumbnailPath = path.join(process.cwd(), "public/thumbnails");
  const fullPath = path.join(directory, filename);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const projectsInfo = matter(fileContents).data;
  return {
    id,
    title: projectsInfo.title || "",
    description: projectsInfo.description || "",
    date: new Date(projectsInfo.date) || "",
    thumbnail: `/thumbnails/${projectsInfo.thumbnail}` || "",
    tags: projectsInfo.tags || [],
  };
}

export function getAllProjectsData() {
  const projectsDirectory = path.join(process.cwd(), "content/projects/public");

  const filenames = fs.readdirSync(projectsDirectory);

  const allProjectsData = filenames.map((filename) =>
    getProjectsData(filename, projectsDirectory),
  );

  return allProjectsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getFeaturedProjectsData() {
  const featuredProjectsDirectory = path.join(
    process.cwd(),
    "content/projects/featured",
  );
  const filenames = fs.readdirSync(featuredProjectsDirectory);

  const featuredProjectsData = filenames.map((filename) =>
    getProjectsData(filename, featuredProjectsDirectory),
  );

  return featuredProjectsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
