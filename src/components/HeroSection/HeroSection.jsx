import React from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  BtnWrapper,
  ArrowForward,
  ArrowRight
} from "./heroStyles";
import { Button } from "../btnStyles";
import Video from "../../assets/video/homeBg.mp4";

const HeroSection = () => {
  const [hover, setHover] = React.useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>

      <HeroContent>
        <HeroH1>Your Favorite Virtual Banking</HeroH1>
        <HeroP>
          Sign Up for a new account today and <span>receive $250</span> in
          credits towards your next payment.
        </HeroP>

        <BtnWrapper>
          <Button
            to="services"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            btnPrimary="true"
            btnDarkTxt="true"
            btnDarkTxtHover="true"
          >
            Get Started! {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </BtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
