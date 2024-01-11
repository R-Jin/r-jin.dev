import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Here I will write about anything I find interesting throughout my day-to-day life.",
};

export default function Page() {
  return (
    <main>
      <h1 className="mt-20 text-3xl font-extrabold md:mt-20 md:text-6xl">
        Writing
      </h1>
      <p className="mt-5 font-serif text-lg md:text-2xl">
        Here I will write about anything I find interesting throughout my
        day-to-day life.
      </p>
    </main>
  );
}
