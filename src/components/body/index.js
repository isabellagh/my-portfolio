import React from "react";
// import { Button } from "../ButtonElements";
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
// import Projects from './../projects/index'
// import Skills from './../skills/index'

const Body = (lightBg,id,imgStart,topLine,lightText,headline,darkText,description, img, alt) => {
  return (
    <>
      <BodyContainer lightBg={lightBg} id={id}>
      {/* <Projects /> */}
      {/* <Skills /> */}
        <BodyWrapper>
          <BodyRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  {/* <Button to="home" >{buttonLabel}<Button /> */}
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt}/>
              </ImgWrap>
            </Column2>
          </BodyRow>
        </BodyWrapper>
      </BodyContainer>
    </>
  );
};

export default Body;
