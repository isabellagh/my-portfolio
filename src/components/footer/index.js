import React from "react";
import {
  FooterContainer,
  FooterWrapper,
  // FooterLinksContainer,
  // FooterLinksWrapper,
  // FooterLinkItems,
     FooterTitle,
  // FooterLink,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
      <FooterTitle> © 2021 Isabella Henriques</FooterTitle>
        
        {/* <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> © Isabella Henriques</FooterLinkTitle>
              <FooterLink></FooterLink>
              <FooterLink></FooterLink>Ï
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle></FooterLinkTitle>
              <FooterLink></FooterLink>
              <FooterLink></FooterLink>Ï
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer> */}
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
