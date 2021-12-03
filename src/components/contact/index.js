import React from "react";
import { ContactContainer } from "./ContactElements";
import Separator from "../../pages/Separator";
import FormContact from "./FormContact";

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <Separator />
      <FormContact />
    </ContactContainer>
  );
};

export default Contact;
