import React from "react";
import { ContactData } from "./ContactData";
import {
  ContactContainer,
  ContactsH1,
  ContactsImg,
  ContactWrapper,
  ContactCard,
  SkillsP,
} from "./ContactElements";

const Contact = () => {
  const data = ContactData;
  return (
    <ContactContainer>
      <ContactsH1>Contact</ContactsH1>
      <SkillsP>Chat with me here or look up my resume.</SkillsP>
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
    </ContactContainer>
  );
};

export default Contact;
