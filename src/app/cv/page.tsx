import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV",
  description: "",
};

export default function Page() {
  return (
    <main>
      <h1 className="mt-20 text-3xl font-extrabold md:mt-20 md:text-6xl">CV</h1>
      <p className="mt-5 font-serif text-lg md:text-2xl">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab sequi
        voluptas a.
      </p>
    </main>
  );
}
