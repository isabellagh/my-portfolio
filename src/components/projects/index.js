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
            <ProjectsImg
              src={require("../../../src/images/soccer.png").default}
            />
            <ProjectsH2>Soccer Star</ProjectsH2>
            <ProjectsP>
              <p>
                A place where you can add your favorite soccer players and rate
                them.
              </p>
            </ProjectsP>
          </ProjectCard>
          <ProjectCard>
            <ProjectsImg
              src={require("../../../src/images/kids.png").default}
            />
            <ProjectsH2>TCC</ProjectsH2>
            <ProjectsP>
              <p>A place for daycare directors to keep track of their classrooms and children.</p>
            </ProjectsP>
          </ProjectCard>
          <ProjectCard>
            <ProjectsImg
              src={require("../../../src/images/personal-trainer.png").default}
            />
            <ProjectsH2>PT Space</ProjectsH2>
            <ProjectsP>
              <p>
                An app where Personal Trainers can organize their client's info
                and where to find a trainer.
              </p>
            </ProjectsP>
          </ProjectCard>
        </ProjectWrapper>
      </ProjectContainer>
    </>
  );
};

export default Projects;
