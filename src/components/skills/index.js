import React from "react";
import {
  SkillContainer,
  SkillsH1,
  SkillWrapper,
  SkillCard,
  SkillsImg,
  SkillsH2,
  SkillsP,
} from "../skills/SkillsElements";
import Separator from "../../pages/Separator";

const Skills = () => {
  return (
    <>
      <SkillContainer id="skills">
      <Separator />
        <SkillsH1>Skills</SkillsH1>
        <SkillWrapper>
          <SkillCard>
            <SkillsImg src="https://www.logo.wine/a/logo/Ruby_on_Rails/Ruby_on_Rails-Logo.wine.svg" />
            <SkillsH2></SkillsH2>
            <SkillsP></SkillsP>
          </SkillCard>
          <SkillCard>
            <SkillsImg src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png" />
            <SkillsH2></SkillsH2>
            <SkillsP></SkillsP>
          </SkillCard>
          <SkillCard>
            <SkillsImg src="https://miro.medium.com/max/1024/0*FwSqmsGzAFKGRexY.png" />
            <SkillsH2></SkillsH2>
            <SkillsP></SkillsP>
          </SkillCard>
          <SkillCard>
            <SkillsImg src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/120px-HTML5_logo_and_wordmark.svg.png" />
            <SkillsH2></SkillsH2>
            <SkillsP></SkillsP>
          </SkillCard>
          <SkillCard>
            <SkillsImg src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/120px-CSS3_logo_and_wordmark.svg.png" />
            <SkillsH2></SkillsH2>
            <SkillsP></SkillsP>
          </SkillCard>
          <SkillCard>
            <SkillsImg src="https://www.logo.wine/a/logo/PostgreSQL/PostgreSQL-Logo.wine.svg" />
            <SkillsH2></SkillsH2>
            <SkillsP></SkillsP>
          </SkillCard>
        </SkillWrapper>
      </SkillContainer>
    </>
  );
};

export default Skills;
