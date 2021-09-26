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

const Skills = () => {
  return (
    <>
      <SkillContainer id="skills">
        <SkillsH1>Skills</SkillsH1>
        <SkillWrapper>
          <SkillCard>
            <SkillsImg src="https://images.pexels.com/photos/5894435/pexels-photo-5894435.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            <SkillsH2>Ruby</SkillsH2>
            <SkillsP>
              "A place where you can add your favorite soccer players and rate
              them. "
            </SkillsP>
          </SkillCard>
          <SkillCard>
            <SkillsImg src="https://images.pexels.com/photos/5894435/pexels-photo-5894435.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            <SkillsH2>Ruby</SkillsH2>
            <SkillsP>
              "A place where you can add your favorite soccer players and rate
              them. "
            </SkillsP>
          </SkillCard>
          <SkillCard>
            <SkillsImg src="https://images.pexels.com/photos/5894435/pexels-photo-5894435.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            <SkillsH2>Ruby</SkillsH2>
            <SkillsP>
              "A place where you can add your favorite soccer players and rate
              them. "
            </SkillsP>
          </SkillCard>
        </SkillWrapper>
      </SkillContainer>
    </>
  );
};

export default Skills;
