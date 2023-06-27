import Image from "next/image";
import { Link } from "react-scroll";
import React, { useState } from "react";
import HamburgerIcon from "./Hamburger/HamburgerIcon";
import Sidebar from "./Sidebar/Sidebar";

const HeaderMenu = [
  { text: "ABOUT", path: "about" },
  { text: "NFTs", path: "nfts" },
  { text: "METAVERSE", path: "metaverse" },
  { text: "LIGHTPAPER", path: "https://setavers.gitbook.io/documentation/" },
  { text: "CONTACT", path: "contact" },
];

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="flex justify-between py-7 lg:px-28 md:px-8 px-1">
      <div className="lg:max-w-[200px] relative z-40 items-center">
        <Image src="/logo.png" width={220} height={200} alt="logo" />
      </div>
      <div className="lg:flex hidden items-center w-[64%] text-[#ffffff] justify-between">
        {HeaderMenu.map((i, _) =>
          i.text === "LIGHTPAPER" ? (
            <a
              className="text-white cursor-pointer hover:text-yellow-700 my-3"
              href={i.path}
              key={_}
              target="_blank"
              rel="noopener noreferrer"
            >
              {i.text}
            </a>
          ) : (
            <Link
              className="text-white text-sm cursor-pointer hover:text-yellow-700 my-3"
              activeClass="active"
              to={i.path}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              key={_}
            >
              {i.text}
            </Link>
          )
        )}
        <div>
          <button className="border-2 hover:bg-white hover:text-black px-[30px] py-[10px] rounded-3xl flex">
            SHOP NFT
          </button>
        </div>
      </div>
      <HamburgerIcon set={setOpen} status={isOpen} />
      <Sidebar status={isOpen} />
    </div>
  );
};

export default Header;
