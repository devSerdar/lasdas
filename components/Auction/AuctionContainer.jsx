import React, { useContext } from "react";
import AuctionCard from "./Lib/AuctionCard";
import { Flipper, Flipped } from "react-flip-toolkit";
import { content } from "./Content";
import { WebContex } from "@/context/WebProvider";

const AuctionContainer = () => {
  const { menu } = useContext(WebContex);
  const items = content[menu];
  return (
    <div className="mx-10">
      <Flipper flipKey={items}>
        <div className="grid mt-12 gap-10 lg:grid-cols-4 grid-cols-1">
          {items.map((i) => (
            <Flipped key={i.id} flipId={i.id}>
              <div>
                <AuctionCard imgSrc={i.imgSrc} cardDetail={i.description} />
              </div>
            </Flipped>
          ))}
        </div>
      </Flipper>
    </div>
  );
};

export default AuctionContainer;
