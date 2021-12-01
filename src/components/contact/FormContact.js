import React from "react";
import emailjs from "emailjs-com";
import { FormContainer, ContactsH2 } from "./FormElements";

const FormContact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_icavu0v",
        "template_aaxyq1r",
        e.target,
        "user_JuGWjeEUe1hyj7SyeArz5"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  return (
    <FormContainer>
      <ContactsH2>Contact Me</ContactsH2>

      <form style={{ margin: "25px 85px 75px 100px" }} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="name" placeholder="Enter your name" />

        <label>Email</label>
        <input type="text" email="user_email" placeholder="Enter your email" />

        <label>Message</label>
        <textarea name="message" rows="4" />

        <input type="submit" value="Send" />
      </form>
    </FormContainer>
  );
};

export default FormContact;
