import Image from "next/image";
import React from "react";
import { Michroma } from "next/font/google";
const michroma = Michroma({ subsets: ["latin"], weight: "400" });

const RightHero = () => {
  return (
    <div className="relative lg:mt-0 mt-24 rounded-[10px] border-2 border-[#222222] bg-[#111111]">
      <div className="rounded-[10px] -mx-1 -mt-1">
        <div className="pt-[0%]">
          <Image
            className="max-w-full transform h-auto"
            src="/featured-2.png"
            alt="fatured"
            width={495}
            height={495}
            style={{ transform: "translateZ(0)" }}
          />
        </div>
        <div className="p-[30px]">
          <div className="flex justify-between items-center">
            <span className={` ${michroma.className} text-lg text-[#ffffff]`}>
              SETaverse Original Poster NFT
            </span>
          </div>
          <div className="mt-[20px] flex justify-between items-end">
            <div>
              <p className="opacity-50 text-white text-xs">Starter bid:</p>
              <div>
                <span className="text-[#d4a90f] text-2xl">2 eth</span>
                <span className="opacity-50 text-white text-base ml-3">
                  $5 590
                </span>
              </div>
            </div>
            <button className="text-white hover:bg-white hover:text-black border-[2px] border-white text-sm rounded-[50px] px-[30px] py-[11px]">
              COMING SOON
            </button>
          </div>
        </div>
      </div>
      <div className="absolute lg:w-[150px] lg:h-[150px] spin lg:top-[70px] -top-[64px] lg:-right-[75px] right-[32px] w-[128px] h-[128px]">
        <Image
          className="object-contain w-full h-full"
          src="/live_auction.png"
          alt="live"
          width={130}
          height={130}
        />
      </div>
    </div>
  );
};

export default RightHero;
