import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { Michroma } from "next/font/google";
import { Montserrat } from "next/font/google";

import AOS from "aos";
import "aos/dist/aos.css";

const michroma = Michroma({ subsets: ["latin"], weight: "400" });
const montserrat = Montserrat({ subsets: ["latin"], weight: "400" });

const Metaverse = () => {
  const aosInitializedRef = useRef(false);

  useEffect(() => {
    if (!aosInitializedRef.current) {
      AOS.init({ duration: 1000 });
      aosInitializedRef.current = true;
    }
  }, []);
  return (
    <div className="pt-32">
      <div
        id="metaverse"
        className="bg-[#cca411] overflow-hidden rounded-3xl lg:mx-24 mx-2"
      >
        <div className="grid lg:grid-cols-2 grid-cols-1 px-10 py-12 gap-3">
          <div
            className={`${michroma.className} grid-cols-1 w-full h-full flex`}
            data-aos="fade-right"
          >
            <div className="my-auto">
              <h3 className={`${michroma.className} text-white`}>
                First Metaverse NFT Marketplace for Film Industry
              </h3>
              <p
                className={`${michroma.className} my-[15px] text-5xl text-white`}
              >
                SETavers
              </p>
              <p className={`${montserrat.className} my-[15px] text-sm`}>
                {` Visit the market places, explore, bargain and buy NFT's in the
            SETaverse. Let’s explore our rare NFTs on the SETaverse.`}
              </p>
              <a href="https://setavers.io/meta/" target="_blank">
                <button className="px-[32px] text-xs mt-5 rounded-[35px] hover:text-[#222222] border-4 hover:bg-transparent py-[25px] text-[#d4a90f] border-[#222222] bg-[#222222]">
                  JUMP IN
                </button>
              </a>
            </div>
          </div>

          <div className="grid-cols-1 w-full h-full flex" data-aos="fade-left">
            <Image
              className="ml-auto rounded-tr-3xl rounded-bl-3xl"
              src="/meta.png"
              alt="metaverse"
              width={465}
              height={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Metaverse;
