import React, { useContext } from "react";
import { Michroma } from "next/font/google";
import { WebContex } from "@/context/WebProvider";

const michroma = Michroma({ subsets: ["latin"], weight: "400" });

const auctionMenu = ["ALL", "CLASSİCS", "HORROR", "ACTİON", "3D"];

const AuctionHeader = () => {
  const { menu, selectMenu } = useContext(WebContex);
  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-between lg:mx-24 text-white">
        <div className="flex lg:my-0 mb-12">
          <p
            className={`${michroma.className} lg:text-[48px] text-[35px] lg:mx-0 mx-auto`}
          >
            NFTs
          </p>
        </div>
        <div className="my-auto flex flex-wrap justify-center lg:flex-nowrap">
          {auctionMenu.map((i, _) => (
            <button
              onClick={() => selectMenu(i)}
              className={`${
                menu == i
                  ? "bg-[#222222] text-[#d4a90f]"
                  : "bg-transparent text-white"
              } h-[45px] hover:text-[#d4a90f] rounded-full outline-none px-[30px] flex items-center text-center cursor-pointer transition-all ease-in`}
              key={_}
            >
              {i}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuctionHeader;
