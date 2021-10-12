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
} from "../projects/ProjectElements";

const Projects = () => {
  const data = ProjectData;
  return (
    <>
      <ProjectContainer id="projects">
        <ProjectsH1>Projects</ProjectsH1>
        <ProjectWrapper>
          {data.map((project) => {
            return (
              <ProjectCard>
                <ProjectsImg src={project.image} />
                <ProjectsH2>{project.title}</ProjectsH2>
                <ProjectsP>
                  <p>{project.about}</p>
                </ProjectsP>
                <div className="project-links">
                  {project.github && (
                    <a className="project-link" href={project.github}>
                      <div className="link-button">
                        <i class="devicon-github-original colored"></i>{" "}
                        Repository
                      </div>
                    </a>
                  )}
                </div>
              </ProjectCard>
            );
          })}
        </ProjectWrapper>
      </ProjectContainer>
    </>
  );
};

export default Projects;
