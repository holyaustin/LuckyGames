import React from "react";
//import { HiMenuAlt4 } from "react-icons/hi";
//import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import ConnectWallet from "./ConnectWallet";
import logo from "../assets/logogreen.png";
import Create from "../create.jsx";
import Home from "../home";
import About from "../about";
import Project from "../project";
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
        <Link to="/project">Projects</Link>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
        <Link to="/create">Create</Link>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
        <Link to="/about">About</Link>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
        <Link to="/guess">Play</Link>

        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>

        <ConnectWallet />  
      </ul>

    </nav>
  );
};

export default Navbar;
