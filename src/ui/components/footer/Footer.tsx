import Socials from "../Socials";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center space-y-4 p-4 text-xs text-foreground">
      <Socials />
      <p className="center">Made by Ryan Jin, Powered by Vercel</p>
    </footer>
  );
};

export default Footer;
