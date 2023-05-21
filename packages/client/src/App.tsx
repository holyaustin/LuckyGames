import { useComponentValue } from "@latticexyz/react";
import { useMUD } from "./MUDContext";
import { GlobalAppContextProvider } from './contexts/GlobalAppContext';
import { Navbar, Footer } from "./components";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Create from "./create";
import Home from "./home";
import About from "./about";
import Project from "./project";
import Guess from "./guess";

export const App = () => {

  return (
    <>
    <GlobalAppContextProvider>
    <BrowserRouter >
      <Navbar />
      <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/guess" element={<Guess />} />
          <Route path="/about" element={<About />} />
          <Route path="/create" element={<Create />} />
          <Route path="/project" element={<Project />} />
      </Routes> 

      <Footer />
   </BrowserRouter>
   </GlobalAppContextProvider>
    </>
  );
};
