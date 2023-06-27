import Image from "next/image";
import React from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";

const FeaturedCard = ({ front, back }) => {
  return (
    <Flippy flipOnHover={true} flipOnClick={false} flipDirection="vertical">
      <FrontSide
        style={{
          backgroundColor: "#222222",
          padding: "50px 0",
          borderRadius: "30px",
        }}
      >
        <div className="flex cursor-pointer flex-col card-face justify-center rounded-[30px] w-full">
          <Image
            className="mx-auto"
            src="/featured.png"
            width={200}
            height={50}
            alt="news"
          />
          <p className="text-center mx-8 mt-5 text-white">{front}</p>
        </div>
      </FrontSide>
      <BackSide
        style={{
          backgroundColor: "#222222",
          borderRadius: "40px",
        }}
      >
        <div className="flex cursor-pointer rounded-[30px] card-face h-full m-auto w-full">
          <p className="m-auto text-center mx-4 text-white">{back}</p>
        </div>
      </BackSide>
    </Flippy>
  );
};

export default FeaturedCard;
