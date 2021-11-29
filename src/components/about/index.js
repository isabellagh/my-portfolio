import React from "react";
import {
  AboutContainer,
  AboutBg,
  VideoBg,
  AboutContent,
  AboutH1,
  AboutP,
  AboutBtnLink,
} from "./AboutElements";

const About = () => {
  return (
    <AboutContainer id="about">
      <AboutBg>
        <VideoBg  src={require("../../videos/pexels-pixabay-220201.jpg").default}/>
      </AboutBg>
      <AboutContent>
        <AboutH1 data-text= "Hello World!">Hello World!</AboutH1>
        <AboutP>
          I am Isabella Henriques, Web Developer.<br />
        </AboutP>
        <AboutBtnLink to="contact">Get started</AboutBtnLink>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;


// <AboutH1>It is time to globalize your business!</AboutH1>
// <AboutP>
//   Put all your effort on running your business while I help you growing It.<br />
// </AboutP>
// <AboutBtnLink to="contact">Get started</AboutBtnLink>