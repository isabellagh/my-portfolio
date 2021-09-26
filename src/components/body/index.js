import React from "react";
import { Button } from "react-scroll";

const Body = () => {
  return (
    <>
      <BodyContainer id="{id}">
        <BodyWrapper>
          <BodyRow>
            <Column1>
              <TextWrapper>
                <TopLine>TopLine</TopLine>
                <Heading>Heading</Heading>
                <Subtitle>Subtitle</Subtitle>
                <BtnWrap>
                  <Button to="home">Button</Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
          </BodyRow>
        </BodyWrapper>
      </BodyContainer>
    </>
  );
};

export default Body;
