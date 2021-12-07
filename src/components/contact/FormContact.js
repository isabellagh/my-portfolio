import emailjs from "emailjs-com";
import React, { useState } from "react";
import { ContactData } from "./ContactData";
import {
  ContactsImg,
  ContactWrapper,
  ContactCard,
  DownloadButton,
} from "./ContactElements";
import "./form.css";
import { StyledButton } from "./FormElements";

const FormContact = () => {
  const [success, showSuccess] = useState(false);

  const Success = () => {
    return <p >Successfully sent! I will be contacting you soon.</p>;
  };

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_icavu0v",
        "template_aaxyq1r",
        e.target,
        "user_JuGWjeEUe1hyj7SyeArz5"
      )
      .then((success) => {
        console.log(success);
      })
      .catch((err) => console.log(err));
    e.target.reset();
    showSuccess(true);
  }

  //hide success message
  setTimeout(() => {
      showSuccess(false)
  }, 5000)

  const data = ContactData;

  return (
    <div className="main-form">
      <h1 className="form-h1">Contact</h1>
      <form className="form-container" onSubmit={sendEmail}>
        {/* <label className="form-label">Name</label> */}
        <input
          className="form-input"
          type="text"
          name="name"
          placeholder="Enter your name"
        />

        {/* <label className="form-label">Email</label> */}
        <input
          className="form-input"
          type="text"
          email="user_email"
          placeholder="Enter your email"
        />

        {/* <label className="form-label" >Message</label> */}
        <textarea
          className="form-textarea"
          name="message"
          rows="4"
          placeholder="Any questions?"
        />

        <StyledButton
          className="form-control form-btn"
          type="submit"
          value="Send"
        />
        <div className="success">{success ? <Success /> : null}</div>
      </form>
      <hr className="horizontal-rule" />
      <h5>Let's connect</h5>
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
          style={{ textDecoration: "none", color: "#0f0f10" }}
          download
          href={require("../../images/Isabella GH resume.pdf").default}
          alt=""
        >
          <i class="fi-rr-cloud-download-icon" />
          Download Resume
        </a>
      </DownloadButton>
    </div>
  );
};

export default FormContact;
