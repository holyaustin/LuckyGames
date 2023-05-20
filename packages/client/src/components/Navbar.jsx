import React from "react";
//import { HiMenuAlt4 } from "react-icons/hi";
//import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import ConnectSequence from "./sequencewallet.tsx";
import ConnectWallet from "./ConnectWallet";
import logo from "../assets/logogreen.png";
import Create from "../pages/create";
import Home from "../home";
import About from "../about";
import Learn from "../learn";
import Guess from "../guess";

//const NavBarItem = ({ title, classprops }) => (
 // <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
// );

const Navbar = () => {
  //const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-2 bg-green-800">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="sm:w-8 md:w-18 lg:w-20  cursor-pointer" />
      </div>
      
      <ul className="text-white justify-left lg:text-2xl md:flex hidden  items-center flex-initial">
     
        <Link to="/">Home</Link>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
        <Link to="/learn">Learn</Link>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
        <Link to="/pages/create">Create</Link>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
        <Link to="/about">About</Link>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
        <Link to="/guess">Guess</Link>

        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
{/**
        <li className="justify-center text-black font-semibold bg-green-300 py-3 px-5 mx-5 sm:mx-3 sm:py-4 sm:px-8 rounded-full cursor-pointer hover:bg-green-800 hover:text-white text-center">
          <a href="https://zkbridge.com/nft" target="_blank" rel="noreferrer">
            NFT Bridge
          </a>
        </li>

        <ConnectSequence />*/}
        <ConnectWallet />  
      </ul>

    </nav>
  );
};

export default Navbar;
