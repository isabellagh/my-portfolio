import React from "react";
import { ContactData } from "./ContactData";
import {
  ContactContainer,
  ContactsH1,
  ContactsImg,
  ContactWrapper,
  ContactCard,
} from "./ContactElements";

const Contact = () => {
  const data = ContactData;
  return (
    <ContactContainer>
      <ContactsH1>Chat with Me</ContactsH1>
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
