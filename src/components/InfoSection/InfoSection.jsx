import React from "react";
import { Button } from "react-scroll";

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

const InfoSection = () => {
  return (
    <>
      <InfoContainer id="id">
        <Wrapper>
          <Row>
            <Column1>
              <TxtWrapper>
                <TopLine>TopLine</TopLine>
                <Heading>Heading</Heading>
                <Subtitle>Subtitle</Subtitle>
                <BtnWrap>
                  <Button to="home" />
                </BtnWrap>
              </TxtWrapper>
            </Column1>

            <Column2>
              <ImgWrap>
                <Img />
              </ImgWrap>
            </Column2>
          </Row>
        </Wrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
