import React from "react";
import { SideBarContainer, Icon, CloseIcon, SideBarWrapper, SideBarMenu, SideBarLink } from "./SideBarElements";

const SideBar = () => {
  return (
    <SideBarContainer>
      <Icon>
        <CloseIcon />
      </Icon>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarLink to="about">About</SideBarLink>
          <SideBarLink to="projects">Projects</SideBarLink>
          <SideBarLink to="skills">Skills</SideBarLink>
          <SideBarLink to="experience">Experience</SideBarLink>
          <SideBarLink to="contact">Contact</SideBarLink>
        </SideBarMenu>
      </SideBarWrapper>
    </SideBarContainer>
  );
};

export default SideBar;
