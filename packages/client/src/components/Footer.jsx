import React from "react";

import logo from "../assets/logogreen.png";

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 bg-black py-2">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-2">
      <div className="flex flex-[0.5] justify-center items-center">
        <img src={logo} alt="logo" className="w-24" />
      </div>
      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-2 w-full">
        <p className="text-white text-center text-base">Lucky Games 2023. All rights reserved.</p>
        <br />

      </div>
      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-2 w-full">
       <br />
        <p className="text-white text-center text-lg">ETHGlobalAutonomous Worlds Sponsors : Optimism, 0xPARC, Lattice, NFT.Storage.</p>

      </div>
    </div>
  </div>
);

export default Footer;
