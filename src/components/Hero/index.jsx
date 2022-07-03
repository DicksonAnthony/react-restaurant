import React from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
} from "./HeroElements";

const Hero = () => {
  return (
    <HeroContainer>
      <Sidebar />
      <Navbar />
      <HeroContent>
        <HeroItems>
          <HeroH1>Greatest Pizza Ever</HeroH1>
          <HeroP>Ready in 60 seconds</HeroP>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
