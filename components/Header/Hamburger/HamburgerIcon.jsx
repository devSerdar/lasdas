import React from "react";
import { Squash as Hamburger } from "hamburger-react";

const HamburgerIcon = ({ status, set }) => {
  return (
    <div className="lg:hidden relative z-50 text-white flex items-center">
      <Hamburger toggled={status} toggle={set} />
    </div>
  );
};

export default HamburgerIcon;
