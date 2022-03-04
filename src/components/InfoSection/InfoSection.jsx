import React from "react";
import { Button } from "../btnStyles";

import {
  InfoContainer,
  Wrapper,
  Row,
  Column1,
  TxtWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Column2,
  ImgWrap,
  Img
} from "./infoStyles";

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightTxt,
  lightTxtSub,
  heading,
  subtitle,
  buttonTxt,
  img,
  alt,
  btnPrimary,
  btnDarkTxt,
  btnDarkTxtHover
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <Wrapper>
          <Row imgStart={imgStart}>
            <Column1>
              <TxtWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightTxt={lightTxt}>{heading}</Heading>
                <Subtitle lightTxtSub={lightTxtSub}>{subtitle}</Subtitle>
                <BtnWrap>
                  <Button
                    to="home"
                    btnPrimary={btnPrimary ? 1 : 0}
                    btnDarkTxt={btnDarkTxt ? 1 : 0}
                    btnDarkTxtHover={btnDarkTxtHover ? 1 : 0}
                  >
                    {buttonTxt}
                  </Button>
                </BtnWrap>
              </TxtWrapper>
            </Column1>

            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </Row>
        </Wrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
