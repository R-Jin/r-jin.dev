import Link from "next/link";
import { FaGithubAlt, FaLinkedin } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

const Socials = () => {
  const size = 24;
  return (
    <div className="flex flex-row justify-start space-x-5 pt-4">
      <Link
        href="https://linkedin.com/in/r-jin01"
        className="text-foreground/70 transition-colors duration-300 hover:text-foreground"
      >
        <FaLinkedin size={size} />
      </Link>
      <Link
        href="https://github.com/R-Jin"
        className="text-foreground/70 transition-colors duration-300 hover:text-foreground"
      >
        <FaGithubAlt size={size} />
      </Link>
      <Link
        href="mailto:ryanjin007@gmail.com"
        className="text-foreground/70 transition-colors duration-300 hover:text-foreground"
      >
        <MdAlternateEmail size={size} />
      </Link>
    </div>
  );
};

export default Socials;
