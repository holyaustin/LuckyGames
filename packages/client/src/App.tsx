import { useComponentValue } from "@latticexyz/react";
import { useMUD } from "./MUDContext";
import { GlobalAppContextProvider } from './contexts/GlobalAppContext';
import { Navbar } from "./components";
import { Footer } from "./components";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Create from "./pages/create";
import Home from "./home";
import About from "./about";
import Learn from "./learn";
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
          <Route path="/pages/create" element={<Create />} />
          <Route path="/learn" element={<Learn />} />
      </Routes> 
      <Footer />
   </BrowserRouter>
   </GlobalAppContextProvider>
    </>
  );
};
