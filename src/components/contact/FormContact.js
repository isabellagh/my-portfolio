import React, { useState } from "react";
import emailjs from "emailjs-com";
import { ContactData } from "./ContactData";
import {
  ContactsImg,
  ContactWrapper,
  ContactCard,
  DownloadButton,
} from "./ContactElements";
import Input from "./Input";
import Button from "./Button";
import Message from "./Message";
import "./form.css";

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

  const data = ContactData;

  return (
    <div className="main-form"  >
      <h1 className="form-h1" >Contact</h1>
      <form className="form-container" onSubmit={sendEmail}>
        
        {/* <label className="form-label">Name</label> */}
        <input className="form-input" type="text" name="name" placeholder="Enter your name" />

        {/* <label className="form-label">Email</label> */}
        <input className="form-input" type="text" email="user_email" placeholder="Enter your email" />

        {/* <label className="form-label" >Message</label> */}
        <textarea className="form-textarea" name="message" rows="4" placeholder="Any questions?"/>

        <input className="form-control btn btn-primary form-btn" type="submit" value="Send" />
      </form>
      <br />
      <hr className="horizontal-rule"/>
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
        <a className="btn btn-outline-light"
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

// style={{ margin: "25px 85px 75px 100px" }}
// return (
//     <MainContainer>
//       <ContactsH2>Contact Me</ContactsH2>
//       <InputContainer onSubmit={sendEmail}>
//           <Input type="text" name="name" placeholder="Name"/>
//           <Input type="email" email="user_email" placeholder="Email"/>
//           <Message type="text" name="message" placeholder="Message"/>
//       </InputContainer>
//       <ButtonContainer>
//           <Button type="submit" value="Send" content="Send" />
//       </ButtonContainer>
//       <HorizontalRule />
//       <SocialMedia>Let's connect</SocialMedia>
//       {/* <form style={{ margin: "25px 85px 75px 100px" }} onSubmit={sendEmail}>
//         <label>Name</label>
//         <input type="text" name="name" placeholder="Enter your name" />

//         <label>Email</label>
//         <input type="text" email="user_email" placeholder="Enter your email" />

//         <label>Message</label>
//         <textarea name="message" rows="4" />

//         <input type="submit" value="Send" />
//       </form> */}
//     </MainContainer>
//   );
// };

// export default FormContact;

// return (
//     <FormContainer>
//       <ContactsH2>Contact Me</ContactsH2>

//       <form style={{ margin: "25px 85px 75px 100px" }} onSubmit={sendEmail}>
//         <label>Name</label>
//         <input type="text" name="name" placeholder="Enter your name" />

//         <label>Email</label>
//         <input type="text" email="user_email" placeholder="Enter your email" />

//         <label>Message</label>
//         <textarea name="message" rows="4" />

//         <input type="submit" value="Send" />
//       </form>
//     </FormContainer>
//   );
// };

// export default FormContact;

//   return (
//     <FormWrapper>
//     <FormStyle>
//       <ContactsH2>Email me here</ContactsH2>
//         {/* <FormWrapper >
//           <FormStyle> */}
//       <form style={{ margin: "25px 85px 75px 100px" }} onSubmit={sendEmail}>
//         <label>Name</label>
//         <FormInput type="text" name="name" placeholder="Enter your name" />

//         <label>Email</label>
//         <FormInput type="text" email="user_email" placeholder="Enter your email" />

//         <label>Message</label>
//         <FormTextArea name="message" rows="4" />

//         <FormBtn type="submit" value="Send" />
//       </form>
//         {/* </FormStyle>
//       </FormWrapper> */}
//       </FormStyle>
//     </FormWrapper>
//   );
// };

// export default FormContact;
