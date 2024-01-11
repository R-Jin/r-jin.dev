import Image from "next/image";
import Socials from "../Socials";

export default function Profile() {
  return (
    <div className="flex flex-col items-center space-y-10 pt-10 md:flex-row md:space-x-[50px] md:space-y-0 md:pt-28">
      <div className="w-[250px] flex-auto rounded-full border-[14px] border-background drop-shadow-[0px_0px_10px_rgba(0,0,0,0.25)] md:w-[500px]">
        <Image
          src="/profile.jpg"
          width={900}
          height={900}
          alt="Profile picture"
          className="rounded-full"
          priority
        />
      </div>

      <div className="flex flex-auto flex-col justify-self-center md:w-[1200px]">
        <h3 className="pb-1 font-serif text-sm text-accent md:text-base">
          Hi, my name is
        </h3>
        <h1 className="pb-4 font-sans text-4xl font-extrabold md:text-6xl">
          Ryan Jin
        </h1>
        <p className="font-serif text-base md:text-xl">
          I&apos;m a{" "}
          <span className="text-accent">Computer Science Student</span> based in
          Gothenburg, Sweden.
        </p>

        <Socials />
      </div>
    </div>
  );
}
