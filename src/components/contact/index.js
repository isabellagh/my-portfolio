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

// import React from "react";
// import {
//   ContactContainer,
//   ContactsH1,
//   ContactWrapper,
//   ContactCard,
//   ContactsImg,
//   ContactsH2,
//   ContactsP,
// } from "../contact/ContactElements";

// const Contact = () => {
//   return (
//     <>
//       <ContactContainer id="contacts">
//         <ContactsH1>Contact Me</ContactsH1>
//         <ContactWrapper>
//           <ContactCard>
//             <ContactsImg src="https://www.logo.wine/a/logo/Ruby_on_Rails/Ruby_on_Rails-Logo.wine.svg" />
//             <ContactsH2></ContactsH2>
//             <ContactsP></ContactsP>
//           </ContactCard>
//           <ContactCard>
//             <ContactsImg src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png" />
//             <ContactsH2></ContactsH2>
//             <ContactsP></ContactsP>
//           </ContactCard>
//           <ContactCard>
//             <ContactsImg src="https://miro.medium.com/max/1024/0*FwSqmsGzAFKGRexY.png" />
//             <ContactsH2></ContactsH2>
//             <ContactsP></ContactsP>
//           </ContactCard>
//           <ContactCard>
//             <ContactsImg src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/120px-HTML5_logo_and_wordmark.svg.png" />
//             <ContactsH2></ContactsH2>
//             <ContactsP></ContactsP>
//           </ContactCard>
//           <ContactCard>
//             <ContactsImg src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/120px-CSS3_logo_and_wordmark.svg.png" />
//             <ContactsH2></ContactsH2>
//             <ContactsP></ContactsP>
//           </ContactCard>
//           <ContactCard>
//             <ContactsImg src="https://www.logo.wine/a/logo/PostgreSQL/PostgreSQL-Logo.wine.svg" />
//             <ContactsH2></ContactsH2>
//             <ContactsP></ContactsP>
//           </ContactCard>
//         </ContactWrapper>
//       </ContactContainer>
//     </>
//   );
// };

// export default Contact;
