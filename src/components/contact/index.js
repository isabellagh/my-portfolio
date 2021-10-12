import React from "react";
import { ContactData } from "./ContactData";
import {
  ContactContainer,
  ContactsH1,
  ContactsImg,
  ContactWrapper,
  ContactCard,
  SkillsP,
  DownloadButton,
} from "./ContactElements";
import Separator from "../../pages/Separator";

const Contact = () => {
  const data = ContactData;
  return (
    <ContactContainer id="contact">
      <Separator />
      <ContactsH1>Contact</ContactsH1>
      <SkillsP>Chat with me or look up my resume here</SkillsP>
      <ContactWrapper>
        <ContactCard>
          {data.map((item) => {
            return (
              <a href={item.link}>
                <ContactsImg src={item.icon}></ContactsImg>
              </a>
            );
          })}
        </ContactCard>
      </ContactWrapper>
      <DownloadButton>
        <a
          download
          href={require("../../images/Isabella GH resume.pdf").default}
          alt=""
        >
          <i class="fi-rr-cloud-download-icon" />
          Download Resume
        </a>
      </DownloadButton>
    </ContactContainer>
  );
};

export default Contact;
