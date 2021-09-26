import React from "react";
import {
  ProjectContainer,
  ProjectsH1,
  ProjectWrapper,
  ProjectCard,
  ProjectsImg,
  ProjectsH2,
  ProjectsP,
} from "../projects/ProjectElements";

const Projects = () => {
  return (
    <>
      <ProjectContainer id="projects">
        <ProjectsH1>Projects</ProjectsH1>
        <ProjectWrapper>
          <ProjectCard>
            <ProjectsImg src="https://images.pexels.com/photos/5894435/pexels-photo-5894435.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            <ProjectsH2>Soccer Star</ProjectsH2>
            <ProjectsP>
              "A place where you can add your favorite soccer players and rate
              them. "
            </ProjectsP>
          </ProjectCard>
          <ProjectCard>
            <ProjectsImg src="https://images.pexels.com/photos/5894435/pexels-photo-5894435.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            <ProjectsH2>Soccer Star</ProjectsH2>
            <ProjectsP>
              "A place where you can add your favorite soccer players and rate
              them. "
            </ProjectsP>
          </ProjectCard>
          <ProjectCard>
            <ProjectsImg src="https://images.pexels.com/photos/5894435/pexels-photo-5894435.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            <ProjectsH2>Soccer Star</ProjectsH2>
            <ProjectsP>
              "A place where you can add your favorite soccer players and rate
              them. "
            </ProjectsP>
          </ProjectCard>
        </ProjectWrapper>
      </ProjectContainer>
    </>
  );
};

export default Projects;
