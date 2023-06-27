import Image from "next/image";
import React from "react";
import { Michroma } from "next/font/google";

const michroma = Michroma({ subsets: ["latin"], weight: "400" });

const AuctionCard = ({ imgSrc, cardDetail }) => {
  return (
    <div className="mx-auto">
      <div className="max-w-[300px] bg-[#111111] border-[1px] transition-all ease-in-out duration-200 hover:bg-[#222222] border-[#333333] rounded-3xl">
        <div className="-mx-[1px] -mt-1">
          <Image
            className="rounded-3xl"
            src={imgSrc}
            width={300}
            height={300}
            alt="artworks"
          />
        </div>
        <div>
          <h4 className={`${michroma.className} mt-7 text-lg ml-6 text-white`}>
            {cardDetail.header}
          </h4>
          <div className="flex my-6 px-6 w-full justify-between">
            <div>
              <p className="text-[#d4a90f]">{cardDetail.priceEth}</p>
              <p className="text-white opacity-50">{cardDetail.priceDolar}</p>
            </div>
            <div>
              <button className="px-9 py-3 border-2 text-white hover:text-black hover:bg-white rounded-full">
                More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuctionCard;
