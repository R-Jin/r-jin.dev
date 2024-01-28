import { Metadata } from "next";
import { GrDocumentPdf } from "react-icons/gr";

export const metadata: Metadata = {
  title: "CV",
  description: "A quick overview of my previous work experience.",
};

export default function Page() {
  return (
    <main>
      <h1 className="mt-20 text-3xl font-extrabold md:mt-20 md:text-6xl">CV</h1>
      <p className="my-5 font-serif text-lg md:text-2xl">
        A quick overview of my previous work experience.
      </p>
      <a
        target="_blank"
        href="/Resume.pdf"
        rel="noopener noreferrer"
        className="flex items-center"
      >
        <div className="flex flex-shrink-0 rounded-md bg-accent/10 p-4 font-sans font-bold text-accent hover:bg-accent/20 active:bg-accent/10">
          <div className="mr-2">
            <GrDocumentPdf
              value={{ style: { verticalAlign: "middle" } }}
              size={20}
            />
          </div>
          Download Resume
        </div>
      </a>
    </main>
  );
}
