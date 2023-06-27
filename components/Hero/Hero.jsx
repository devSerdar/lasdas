import React from "react";
import LeftHero from "./LeftHero";
import RightHero from "./RightHero";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-around lg:mx-5">
      <LeftHero />
      <RightHero />
    </div>
  );
};

export default Hero;
