"use client";
import { inter, merriweather } from "@/ui/fonts";
import "@/ui/globals.css";

import Header from "@/ui/components/header/Header";
import Providers from "@/ui/components/Providers";

import { motion } from "framer-motion";
import Footer from "@/ui/components/footer/Footer";
import { usePathname } from "next/navigation";

const variants = {
  hidden: { opacity: 0, x: -100, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <html
      lang="en"
      className={`${merriweather.variable} ${inter.variable} antialiased`}
      suppressHydrationWarning
    >
      <body>
        <header>
          <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
        </header>
        <Providers>
          <div className="bg-background transition-colors duration-200 ease-linear">
            <Header />
            <motion.main
              key={pathname}
              initial="hidden"
              animate="enter"
              variants={variants}
              transition={{
                duration: 0.3,
                type: "tween",
                ease: [0.31, 1.06, 0.66, 0.94],
              }}
              className="flex min-h-screen flex-col px-8 text-foreground md:px-[150px] lg:px-[250px] xl:px-[375px] 2xl:px-[400px] 3xl:px-[640px]"
            >
              {children}
            </motion.main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
