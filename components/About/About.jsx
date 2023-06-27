import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { Michroma } from "next/font/google";
import { Montserrat } from "next/font/google";

import AOS from "aos";
import "aos/dist/aos.css";

const michroma = Michroma({ subsets: ["latin"], weight: "400" });
const montserrat = Montserrat({ subsets: ["latin"], weight: "400" });
const About = () => {
  const aosInitializedRef = useRef(false);

  useEffect(() => {
    if (!aosInitializedRef.current) {
      AOS.init({ duration: 1000 });
      aosInitializedRef.current = true;
    }
  }, []);
  return (
    <div className="overflow-hidden">
      <div
        id="about"
        className={`${michroma.className} pt-32 lg:mx-20 mx-4 grid lg:grid-cols-2 grid-cols-1`}
      >
        <div className="col-span-1 lg:mb-0 mb-24 flex" data-aos="fade-right">
          <Image
            className="my-auto"
            src="/logo.png"
            width={465}
            height={200}
            alt="Setaverse"
          />
        </div>
        <div className="col-span-1 flex" data-aos="fade-left">
          <div className="m-auto">
            <h2
              className={`${michroma.className} text-white lg:text-5xl text-4xl`}
            >
              SETavers
            </h2>
            <div
              className={`${montserrat.className} text-white mt-10 opacity-70 text-sm`}
            >
              <p className="text-[#d4a90f]">SETAVERS.İO</p>
              <p className="mt-[15px] leading-7">
                {`SETavers will enable fans, film enthusiasts, collectors, and
            investors to buy tokenized digital twins of costumes, watches,
            weapons, furniture, cars... from verified production companies.
            These tokenized assets are web3 ready and can be showcased, "used",
            worn, and sold in the metaverse.`}
              </p>
              <p className="mt-[15px] leading-7">
                Possession of such assets grants accesses to specific areas of
                the metaverse reserved only for collectors with a specific
                collection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
