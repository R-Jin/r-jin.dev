export type PostData = {
  id: string;
  title: string;
  description: string;
  date: Date | string;
  draft: boolean;
};

export type ProjectData = {
  id: string;
  title: string;
  description: string;
  date: Date | string;
  thumbnail: string;
  tags: string[];
  draft: boolean;
};

export type PageData = {
  title: string;
  date: Date | string;
  content: string;
};
