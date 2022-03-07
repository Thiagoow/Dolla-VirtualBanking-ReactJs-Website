import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

const bodyColor = "#f3f3fc";
const containerColor = "#010606";
const firstColor = "#00bb77";
const firstAltColor = "#009955";

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 700px;
  position: relative;
  z-index: 1;

  //Make the video more darker than the original:
  :before {
    content: "";
    position: absolute;
    z-index: 2;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.6) 100%
    );
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.2) 0%,
      transparent 100%
    );
  }

  @media screen and (min-width: 768px) and (max-width: 1000px) {
    height: 650px;
  }
  @media screen and (max-width: 480px) {
    height: 700px;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 3rem;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
  @media screen and (max-width: 580px) {
    font-size: 2rem;
  }
`;

export const HeroP = styled.p`
  margin-top: 1.5rem;
  color: #fff;
  font-size: 1.25rem;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 1.12rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const BtnWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 1.25rem;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 1.25rem;
`;
