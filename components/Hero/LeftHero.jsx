import React, { useEffect, useState } from "react";

import { useSpring, animated } from "react-spring";

import { Michroma, Montserrat } from "next/font/google";
const michroma = Michroma({ subsets: ["latin"], weight: "400" });
const montserrat = Montserrat({ subsets: ["latin"], weight: "400" });

const CounterComponent = ({ endNumber }) => {
  const [count, setCount] = useState(0);

  const props = useSpring({
    number: count,
    from: { number: 0 },
    to: { number: endNumber },
    config: { duration: 2000 },
  });

  useEffect(() => {
    setCount(endNumber);
  }, []);

  return (
    <div>
      <animated.span>
        {props.number.interpolate((value) => Math.floor(value))}
      </animated.span>
    </div>
  );
};

const LeftHero = () => {
  return (
    <div className={`lg:my-auto mt-[50px] lg:mx-0 mx-2  ${michroma.className}`}>
      <h1
        className={`text-white -mt-12 lg:leading-[60px] leading-[40px] lg:text-5xl text-[32px]`}
      >
        Extraordinary
        <br />
        rare digital NFT
      </h1>
      <span className="text-white leading-[60px] text-3xl">by </span>
      <span className="text-[#d4a90f] leading-[60px] text-[32px]">
        SETavers
      </span>
      <div className="mt-8">
        <a
          className={`${montserrat.className} cursor-pointer hover:bg-black hover:text-white hover:border-white border-2 border-[#d4a90f] bg-[#d4a90f] px-9 py-5 font-medium rounded-full text-sm`}
        >
          VIEW MORE
        </a>
      </div>
      <div className="mt-14 flex w-full justify-between">
        <div className={`${michroma.className} text-white w-full`}>
          <div className="flex w-fit mx-auto">
            <span className="text-3xl">
              <CounterComponent endNumber={200} />
            </span>
            <span className="text-3xl">+</span>
          </div>
          <p
            className={`${montserrat.className} lg:text-start text-center text-sm mt-4`}
          >
            NFTs
          </p>
        </div>
        <div className={`${michroma.className} text-white flex w-full`}>
          <div className="ml-auto flex flex-col items-center text-center">
            <div className="flex">
              <span className="text-3xl">
                <CounterComponent endNumber={40} />
              </span>
              <span className="text-3xl">+</span>
            </div>
            <p className={`${montserrat.className} text-sm mt-4`}>
              Clients Worldwide
            </p>
          </div>
        </div>
        <div className={`${michroma.className} text-white w-full flex`}>
          <div className="lg:ml-auto mx-auto">
            <span className="text-3xl">
              <CounterComponent endNumber={12} />
            </span>
            <p className={`${montserrat.className} text-sm mt-4`}>Awards</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftHero;
