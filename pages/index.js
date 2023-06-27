import { Montserrat } from "next/font/google";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Auction from "@/components/Auction/Auction";
import About from "@/components/About/About";
import Metaverse from "@/components/Metaverse/Metaverse";
import OurTeam from "@/components/OurTeam/OurTeam";
import Featured from "@/components/Featured/Featured";
import Contact from "@/components/Contact/Contact";

import { useEffect, useState } from "react";
import Head from "next/head";

const mont = Montserrat({ subsets: ["latin"] });

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="body">
      <Head>
        <title>SETAVERS.İO</title>
        <meta
          name="description"
          content="SETavers will enable fans, film enthusiasts, collectors, and investors to buy tokenized digital twins of costumes, watches, weapons, furniture, cars... from verified production companies."
        />
      </Head>
      <main className={`min-h-screen ${mont.className}`}>
        <div
          className={`w-full z-50 transition-all delay-150 duration-500 ${
            scrollPosition >= 450 ? "fixed bg-[#222222]" : ""
          } ${
            scrollPosition >= 150 && scrollPosition <= 450
              ? "translate-y-[-100%]"
              : "translate-y-0 "
          }`}
        >
          <Header />
        </div>

        <Hero />

        <Auction />

        <About />
        <Metaverse />
        <OurTeam />
        <Featured />
        <Contact />
      </main>
      <footer className="py-8 border-t-[1px] border-[#222222]">
        <p className="text-center text-[#707070] text-sm">
          Copyright © 2022 SETavers
        </p>
      </footer>
    </div>
  );
}
