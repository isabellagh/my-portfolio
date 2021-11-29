import React from "react";
import {
  AboutContainer,
  AboutBg,
  VideoBg,
  AboutContent,
  AboutH1,
  AboutP,
} from "./AboutElements";

const About = () => {
  return (
    <AboutContainer id="about">
      <AboutBg>
        <VideoBg  src={require("../../videos/pexels-pixabay-220201.jpg").default}/>
      </AboutBg>
      <AboutContent>
        <AboutH1>It is time to globalize your business!</AboutH1>
        <AboutP>
          Put all your effort on running your business while I help you growing It.<br />
        </AboutP>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;
