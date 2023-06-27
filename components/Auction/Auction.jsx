import React, { useEffect, useRef } from "react";
import AuctionHeader from "./AuctionHeader";
import AuctionContainer from "./AuctionContainer";

import AOS from "aos";
import "aos/dist/aos.css";

const Auction = () => {
  const aosInitializedRef = useRef(false);

  useEffect(() => {
    if (!aosInitializedRef.current) {
      AOS.init({ duration: 1000 });
      aosInitializedRef.current = true;
    }
  }, []);
  return (
    <div className="lg:pt-24 pt-6" id="nfts" data-aos="fade-up">
      <AuctionHeader />
      <AuctionContainer />
    </div>
  );
};

export default Auction;
