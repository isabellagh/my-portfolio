import React from "react";
import { ProjectData } from "../projects/ProjectsData";
import {
  ProjectContainer,
  ProjectsH1,
  ProjectWrapper,
  ProjectCard,
  ProjectsImg,
  ProjectsH2,
  ProjectsP,
  GithubLink,
  BtnLink,
} from "../projects/ProjectElements";
import { GoMarkGithub } from "react-icons/go";
import Separator from "../../pages/Separator";

const Projects = () => {
  const data = ProjectData;
  return (
    <>
      <ProjectContainer id="projects">
        <Separator />
        <ProjectsH1>Projects</ProjectsH1>
        <ProjectWrapper>
          {data.map((project) => {
            return (
              <ProjectCard>
                <ProjectsImg src={project.image} />
                <ProjectsH2>{project.title}</ProjectsH2>
                <ProjectsP>{project.about}</ProjectsP>
                <GithubLink>
                  {project.github && (
                    <BtnLink href={project.github}>
                      <GoMarkGithub />
                      Repository
                    </BtnLink>
                  )}
                </GithubLink>
              </ProjectCard>
            );
          })}
        </ProjectWrapper>
      </ProjectContainer>
    </>
  );
};

export default Projects;
