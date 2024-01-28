import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { PostData, ProjectData, PageData } from "./definitions";

const postsDirectory = path.join(process.cwd(), "content/posts/public");

function getPageData(filename: string, directory: string): PageData {
  const fullPath = path.join(directory, filename);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const pageData = matter(fileContents);
  return {
    title: pageData.data.title || "",
    date: new Date(pageData.data.date) || "",
    content: pageData.content,
  };
}

export function getPostPage(filename: string) {
  return getPageData(filename, postsDirectory);
}

export function getAllPostSlugs() {
  const filenames = fs.readdirSync(postsDirectory);
  const slugs = filenames.map((filename) => filename.replace(/\.md$/, ""));

  return slugs;
}

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
    draft: postInfo.draft || false,
  };
}

export function getAllPostsData(): PostData[] {
  const filenames: any = fs.readdirSync(postsDirectory);

  const allPostsData = filenames.reduce(
    (filtered: PostData[], filename: string) => {
      const postData = getPostData(filename);
      if (!postData.draft) {
        filtered.push(postData);
      }
      return filtered;
    },
    [],
  );

  return allPostsData.sort((a: PostData, b: PostData) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getLatestPostsData(number: number): PostData[] {
  return getAllPostsData().slice(0, number);
}

function getProjectsData(filename: string, directory: string): ProjectData {
  // ID for the posts
  const id = filename.replace(/\.md$/, "");

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
    draft: projectsInfo.draft || false,
  };
}

const projectsDirectory = path.join(process.cwd(), "content/projects/public");

export function getAllProjectsData(): ProjectData[] {
  const filenames: any = fs.readdirSync(projectsDirectory);

  const allProjectsData = filenames.reduce(
    (filtered: ProjectData[], filename: string) => {
      const projectData = getProjectsData(filename, projectsDirectory);
      if (!projectData.draft) {
        filtered.push(projectData);
      }
      return filtered;
    },
    [],
  );

  return allProjectsData.sort((a: ProjectData, b: ProjectData) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getFeaturedProjectsData(): ProjectData[] {
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

export function getAllProjectPages(): PageData[] {
  const filenames = fs.readdirSync(projectsDirectory);
  const allProjectPages = filenames.map((filename) =>
    getPageData(filename, projectsDirectory),
  );

  return allProjectPages.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllProjectSlugs() {
  const filenames = fs.readdirSync(projectsDirectory);
  const slugs = filenames.map((filename) => filename.replace(/\.md$/, ""));

  return slugs;
}

export function getProjectPage(filename: string) {
  return getPageData(filename, projectsDirectory);
}
