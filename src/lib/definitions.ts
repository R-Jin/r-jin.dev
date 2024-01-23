export type PostData = {
  id: string;
  title: string;
  description: string;
  date: Date | string;
};

export type ProjectData = {
  id: string;
  title: string;
  description: string;
  date: Date | string;
  thumbnail: string;
  tags: string[];
};
