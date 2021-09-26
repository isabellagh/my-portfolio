import React from "react";
import { Button } from "react-scroll";
import {
  BodyContainer,
  BodyWrapper,
  BodyRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
} from "./BodyElements";

const Body = () => {
  return (
    <>
      <BodyContainer>
        <BodyWrapper>
          <BodyRow>
            <Column1>
              <TextWrapper>
                <TopLine>TopLine</TopLine>
                <Heading>Heading</Heading>
                <Subtitle>Subtitle</Subtitle>
                <BtnWrap>
                  {/* <Button to="home" /> */}
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img />
              </ImgWrap>
            </Column2>
          </BodyRow>
        </BodyWrapper>
      </BodyContainer>
    </>
  );
};

export default Body;
