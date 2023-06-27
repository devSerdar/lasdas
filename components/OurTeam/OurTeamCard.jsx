import Image from "next/image";
import React from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";

const OurTeamCard = ({ imgSrc, name, desc, external }) => {
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
            className="m-auto rounded-2xl"
            src={imgSrc}
            alt={name}
            width={170}
            height={220}
          />
          <p className="text-center mt-5 text-white">{name}</p>
        </div>
      </FrontSide>
      <BackSide
        style={{
          backgroundColor: "#222222",
          borderRadius: "40px",
        }}
      >
        <div className="flex flex-col justify-center cursor-pointer rounded-[30px] card-face h-full m-auto w-full">
          <p className="m-auto text-center mx-4 text-white">{desc}</p>
          {external && (
            <a className="m-auto text-[#d4a90f] text-sm" href={external.link}>
              {external.name}
            </a>
          )}
        </div>
      </BackSide>
    </Flippy>
  );
};

export default OurTeamCard;
