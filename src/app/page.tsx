import { Metadata } from "next";

import Profile from "@/ui/components/profile/Profile";

export const metadata: Metadata = {
  title: "R-Jin.dev",
  description: "I am a computer science student based in Gothenburg, Sweden.",
};

export default function Page() {
  return (
    <>
      <Profile />
      <div className="my-20">
        <h1 className="pb-2 font-sans text-3xl font-bold">About Me</h1>
        <p className="font-serif text-lg">
          Currently, I&apos;m focused on{" "}
          <span className="text-accent"> web development </span>
          and <span className="text-accent">3D Graphics</span>. In my free time
          I enjoy playing badminton, reading and exploring the field of computer
          science.
        </p>
      </div>
    </>
  );
}
