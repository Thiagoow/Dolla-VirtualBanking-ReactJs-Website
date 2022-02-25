import React from "react";
import { HeroContainer, HeroBg, VideoBg } from "./heroStyles";
import Video from "../../assets/video/homeBg.mp4";

const HeroSection = () => {
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
    </HeroContainer>
  );
};

export default HeroSection;
