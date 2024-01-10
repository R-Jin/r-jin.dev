"use client";
import DarkModeToggle from "./DarkModeToggle";
import NavLinks from "./NavLinks";
import { motion } from "framer-motion";

// Animate navbar to fade in from bottom
const headerMotion = {
  initial: {
    y: -20,
    opacity: 0,
  },
  onLoad: {
    y: 0,
    opacity: 100,
    transition: {
      duration: 0.3,
      type: "tween",
      ease: [0.31, 1.06, 0.66, 0.94],
    },
  },
};

export default function Header() {
  return (
    <motion.header
      initial={headerMotion.initial}
      animate={headerMotion.onLoad}
      className="sticky top-0 z-10 bg-background px-8 transition-colors duration-200 ease-linear md:px-[150px] lg:px-[250px] xl:px-[375px] 2xl:px-[400px] 3xl:px-[640px]"
    >
      <div className="flex flex-row items-center justify-between">
        <NavLinks />
        <DarkModeToggle />
      </div>
      <hr className="border-foreground" />
    </motion.header>
  );
}
