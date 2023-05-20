/* eslint-disable max-len */
import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";
import logo1 from "../assets/logored.png";

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl text-justify">
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-white text-xl">{title}</h3>
      <p className="text-justify mt-1 text-white text-sm md:w-11/12">
        {subtitle}
      </p>
    </div>
  </div>
);

const Services = () => (
  <div className="flex w-full justify-center items-center bg-gradient-to-b from-green-700 to-black">
    <div className="flex mf:flex-row items-center justify-between md:p-20 py-12 px-4">
      <div className="flex-1 flex flex-col justify-start items-start mx-1 sm:mx-10">
        <h1 className="text-white text-3xl sm:text-5xl py-2 ">
          To Play the Lucky Game
          <br /> <br />
        </h1>
        <p className="my-2 text-white font-light md:w-11/12 w-11/12 text-2xl text-justify">



        </p>
        <br />
        <p className=" my-2 text-white font-light md:w-11/12 w-11/12 text-2xl text-justify">
        Choose the Lucky Guess Game or
        </p>
        <br />
        
        <p className=" my-2 text-white font-light md:w-11/12 w-11/12 text-2xl text-justify">
        Choose the Lucky Seven Game
        </p>
        <br />
        <p className=" my-2 text-white font-light md:w-11/12 w-11/12 text-2xl text-justify">
          C
        </p>
        <br />
        <div className="md:flex-[0.8] flex-initial justify-left items-center">

          <img src={logo1} alt="welcome" className="w-100 cursor-pointer" />
        </div>

      </div>

      <div className="flex-1 flex flex-col justify-start items-center text-2xl">
        <ServiceCard
          color="bg-[#2952E3]"
          title="1. Clean Portable Water"
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
          subtitle="Access to clean portable water is essential for human life and can also be a key factor in reducing deforestation. In many areas, deforestation occurs due to the need for firewood to boil water for consumption and cooking. Providing access to clean portable water through alternative means can help reduce the demand for firewood, thereby reducing deforestation."
        />
        <ServiceCard
          color="bg-[#8945F8]"
          title="2. Renewal Solar Energy "
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
          subtitle="Solar energy is a clean and sustainable source of power that does not emit harmful pollutants into the environment. The use of solar panels can help reduce the reliance on fossil fuels, which are a major contributor to climate change and deforestation. Additionally, solar energy can be used to power homes, businesses, and other infrastructure, reducing the need for grid power generated from non-renewable sources."
        />
        <ServiceCard
          color="bg-[#8945F8]"
          title="3. Sustainable agriculture: "
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
          subtitle="Encouraging sustainable farming practices can help reduce the need for new agricultural land, and promote agroforestry practices that integrate trees into agricultural systems."
        />
        <ServiceCard
          color="bg-[#F84550]"
          title="4. Corporate responsibility: "
          icon={<RiHeart2Fill fontSize={21} className="text-white" />}
          subtitle="Companies that rely on forest products can take steps to ensure that their sourcing practices are sustainable and support reforestation efforts. "
        />
        <ServiceCard
          color="bg-[#2952E3]"
          title="5. Education and awareness: "
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
          subtitle="Raising awareness about the importance of forests and the impacts of deforestation can help to promote individual and collective action to protect and restore forests. "
        />

      </div>
    </div>
  </div>
);

export default Services;
