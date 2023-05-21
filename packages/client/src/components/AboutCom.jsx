import React from "react";
import logo1 from "../assets/four.jpg";

const AboutCom = () => (
  <div className="flex w-full justify-center items-center ">
    <div className="flex mf:flex-row  items-center justify-between md:p-20 py-12 px-4">
      <div className="flex-1 flex flex-col justify-start items-start">

        <h1 className="text-white text-3xl sm:text-5xl py-2 ">
          About Lucky Games sustainability
          <br />
        </h1>

        <p className="my-2 text-white font-light md:w-9/12 w-11/12 text-2xl text-justify">
         Trees (agriculture) absorb carbon dioxide and produce oxygen, making them crucial to regulating the Earth's climate. Deforestation on the other hand, leads to an increase in carbon dioxide in the atmosphere, which contributes to global warming.
        </p>
        <br />  <br />
        <h1 className="text-white text-3xl sm:text-5xl py-2 ">
          Our Vision

        </h1>
        <br />
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-2xl">
        To ensure climate sustainability, we need to reduce deforestation by implementing sustainable forest management practices through education. This involves promoting the use of alternative sources of energy, such as solar and wind power, and reducing the demand for products that are made from deforested areas.
        </p>
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-2xl">
        Additionally, Prividing portable clean water to help stop the use of firewood to boil water. Forest conservation and restoration can also help to maintain biodiversity, prevent soil erosion, and protect watersheds, which are all critical for supporting healthy ecosystems and human communities.
        </p>
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-2xl">
          Reduce your carbon footprint

        </p>

      </div>

      <div className="md:flex-[0.95] flex-initial justify-center items-center mt-">
        <img src={logo1} alt="welcome" className="w-350 cursor-pointer " />
      </div>
    </div>
  </div>
);

export default AboutCom;
