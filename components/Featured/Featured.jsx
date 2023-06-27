import React from "react";
import FeaturedCard from "./FeaturedCard";
import { Michroma } from "next/font/google";

const michroma = Michroma({ subsets: ["latin"], weight: "400" });

const featureds = [
  {
    front:
      "In 2020 alone, over $250M in NFTs changed hands, with most of that occurring late in the year.",
    back:
      "NFTs have the potential to disrupt the music industry ($70B+ a year), fine art sales ($60B+ a year), video games ($140B+ a year), the collectibles market ($370B+ a year), and many other industries.",
  },

  {
    front:
      "Luxury watchmaker Rolex enters metaverse with crypto and NFT trademark applications",
    back:
      "The cryptocurrency industry is expanding, and its assets are becoming increasingly popular, leading some well-known high-end brands, including luxury watchmaker Rolex, to jump on the crypto bandwagon themselves.",
  },
  {
    front: "Europe’s ‘First’ NFT Vending Machine Gets Cold London Reception",
    back:
      "Machine can be found at Queen Elizabeth II Centre, Nov. 3-4. Idea is to make NFTs more accessible in ‘fun and quirky’ way",
  },
];

const Featured = () => {
  return (
    <div>
      <h3 className={`${michroma.className} text-center text-5xl text-white`}>
        Featured On
      </h3>
      <div className="grid lg:grid-cols-3 grid-cols-1 lg:mx-24 mx-2 py-8 gap-8">
        {featureds.map((i, k) => (
          <FeaturedCard key={k} front={i.front} back={i.back} />
        ))}
      </div>
    </div>
  );
};

export default Featured;
