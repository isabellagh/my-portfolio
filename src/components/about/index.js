import React from "react";
import Video from "../../videos/video.mp4";
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
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </AboutBg>
      <AboutContent>
        <AboutH1>Isabella Henriques</AboutH1>
        <AboutP>
          Hello World, I am Isabella, currently working as a freelance Software
          Engineer. I am a former Personal Trainer, soccer coach, and teacher.
          Changing career to Software Engineering was not easy but definitely
          pleasant. I love staying alone with my computer just envisioning,
          creating my mini-projects, fixing the bugs I have created, and
          thinking about ways of helping people through technology.{" "}
        </AboutP>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;
