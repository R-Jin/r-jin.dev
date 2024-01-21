"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Writings", href: "/writings" },
  { name: "CV", href: "/cv" },
];

export default function NavLinks() {
  const [activeWidth, setActiveWidth] = useState(0);
  const [offsetLeft, setOffsetLeft] = useState(0);
  const pathname = "/" + usePathname()?.split("/")[1];

  useEffect(() => {
    const handleResize = () => {
      const activeLink = document.querySelector(".active");
      const nav = document.querySelector("nav");
      if (activeLink && nav) {
        setActiveWidth(activeLink.getBoundingClientRect().width);
        // Calculate the offset from the left side of the active links container
        setOffsetLeft(
          activeLink.getBoundingClientRect().left -
            nav.getBoundingClientRect().left,
        );
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [pathname, activeWidth]);

  let animate = {
    width: activeWidth,
    x: offsetLeft,
    transition: {
      ease: [0.45, 0.68, 0.17, 0.98],
    },
  };

  return (
    <div className="relative">
      <nav className="justify-left relative flex space-x-5 py-8 text-center font-sans text-xs font-semibold text-foreground md:text-xl lg:space-x-10 lg:space-y-0">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`${pathname === link.href ? "active" : ""}`}
          >
            {link.name}
          </Link>
        ))}
      </nav>
      <motion.span
        animate={animate}
        className={`absolute bottom-7 block h-[2px] bg-accent lg:h-1`}
      />
    </div>
  );
}
