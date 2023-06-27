import { Link } from "react-scroll";
import React, { useEffect } from "react";

const HeaderMenu = [
  { text: "ABOUT", path: "about" },
  { text: "NFTs", path: "nfts" },
  { text: "METAVERSE", path: "metaverse" },
  { text: "LIGHTPAPER", path: "https://setavers.gitbook.io/documentation/" },
  { text: "CONTACT", path: "contact" },
];

const Sidebar = ({ status }) => {
  useEffect(() => {
    if (!status) {
      document.body.style.overflowY = "auto";
    } else {
      document.body.style.overflowY = "hidden";
    }
  }, [status]);
  return (
    <div
      className={` ${
        status ? "w-full" : "w-0 -translate-x-60"
      } md:hidden left-0 h-screen flex transition-all delay-200 ease-in-out fixed top-0 z-30`}
    >
      <div className="w-full bg-[#010F16] h-screen">
        <div className="mt-44 ml-8 h-[150px] flex justify-between flex-col">
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
                className="text-white cursor-pointer hover:text-yellow-700 my-3"
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
          <div className="flex mt-5">
            <button className="border-2 hover:bg-white text-white hover:text-black px-[30px] py-[10px] rounded-3xl flex">
              SHOP NFT
            </button>
          </div>
        </div>
      </div>
      <div className="w-3/5 bg-[#ffffff54] bulur-[200]"></div>
    </div>
  );
};

export default Sidebar;
