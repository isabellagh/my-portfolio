import styled from "styled-components";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

// export const FormContainer = styled.div `
//   margin-top: 30px;
//   display: flex;
//   align-items: center;
//   flex-direction: column;
//   height: 60vh;
//   width: 50vw;
//   background: rgba(255, 255, 255, 0.15);
//   box-shadow: 0 8px 32px 0 rgba(100, 100, 300,0.50);
//   backdrop-filter: blur(8.5px);
//   border-radius: 10px;
//   color: #ffffff;
//   ${'' /* text-transform: uppercase; */}
//   letter-spacing: 0.4rem;
//   max-width: 700px;
// `

// export const ContactsH2 = styled.h2 `
//   margin: 3rem 0 2rem 0;
// `

export const MainContainer = styled.div `
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 30vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135,0.37);
  backdrop-filter: blur(8.5px);
   border-radius: 10px;
   color: #ffffff;
   ${'' /* text-transform: uppercase; */}
   letter-spacing: 0.4rem;
   max-width: 700px;
`

 export const ContactsH2 = styled.h2 `
   margin: 2rem 0 2rem 0;
 `

 export const InputContainer = styled.div `
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   align-items: center;
   height: 40%;
   width: 100%;
`

export const StyledInput = styled.input `
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 2rem;
  width: 80%;
  height: 2rem;
  padding: 1rem;
  border: none;
  outline: none;
  color: #3c354e;
  font-weight: bold;

  &:focus {
      display: inline-block;
      box-shadow: 0 0 0 0.2rem #b9abe0;
      background-filter: blur(12rem);
  }

  &::placeholder {
      color: #b9abe099;
      font-weight: 100;
      font-size: 1rem;
  }
`

export const ButtonContainer = styled.div `
  margin: 1rem 0 1rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StyledButton = styled.button `
  ${'' /* background: linear-gradient(to right, #14163c 0%, #03217b 79%); */}
  ${'' /* text-transform: uppercase; */}
  background: #01bf71;
  letter-spacing: 0.2rem;
  width: 65%;
  height: 2.5rem;
  border: none;
  color: #010606;
  border-radius: 2rem;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #CCF0D0;
    color: #010606;
  }
`

export const SocialMedia = styled.h3 `
  margin: 1rem 0 1rem 0;
`

export const HorizontalRule = styled.hr `
  width: 90%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border: none;
  margin: 1.5em 0 1rem 0;
  backdrop-filter: blur(25px);
  background-image: linear-gradient(
    to right top,
    #78a4cf,
    #55b5da,
    #2bc5d9,
    #28d3ca,
    #5adeb0,
    #6ad398,
    #77c882,
    #83bd6d,
    #6b9e5a,
    #548148,
    #3f6437,
    #2b4926
  );
  ${'' /* background: linear-gradient(to right, #14163c 0%, #03217b 79%); */}
`

export const FormTextArea = styled.textarea `
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 1.5rem;
  width: 80%;
  height: 8rem;
  padding: 1rem;
  border: none;
  outline: none;
  color: #3c354e;
  font-weight: bold;
  min-height: 100px;
  resize: none;

  &::placeholder {
      color: #b9abe099;
      font-weight: 100;
      font-size: 1rem;
  }


   ${'' /* background-color: #eee;
   width: 100%;
   min-height: 100px;
   resize: none;
   background-color: #fff;
   height: 40px;
   border-radius: 5px;
   border: 1px solid #ddd;
   margin: 10px 0 20px 0;
   padding: 20px;
   box-sizing: border-box; */}
 `





// export const FormWrapper = styled.div `
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   padding: 0 20px;
// `

// export const FormStyle = styled.form `
//   width: 100%;
//   max-width: 700px;
//   padding: 40px;
//   background-color: #fff;
//   border-radius: 10px;
//   box-sizing: border-box;
//   box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
// `

// export const FormInput = styled.input `
//   display: block;
//   width: 100%;
//   background-color: #fff;
//   height: 40px;
//   border-radius: 5px;
//   border: 1px solid #ddd;
//   margin: 10px 0 20px 0;
//   padding: 20px;
//   box-sizing: border-box;
// `

// export const FormTextArea = styled.textarea `
//   background-color: #eee;
//   width: 100%;
//   min-height: 100px;
//   resize: none;
//   background-color: #fff;
//   height: 40px;
//   border-radius: 5px;
//   border: 1px solid #ddd;
//   margin: 10px 0 20px 0;
//   padding: 20px;
//   box-sizing: border-box;
// `

// export const FormBtn = styled.input `
//   display: block;
//   background-color: #01bf71;
//   color: #010606;
//   font-size: 18px;
//   border: 0;
//   border-radius: 5px;
//   height: 40px;
//   width: 100%;
//   padding: 0 20px;
//   cursor: pointer;
//   box-sizing: border-box;

//   &:hover {
//     transition: all 0.2s ease-in-out;
//     background: #B7F0BF;
//     color: #010606;
//   } 
// `


// export const FormError = styled.div `
//   color: red;
//   font-weight: 800;
//   margin: 0 0 40px 0;
// `


// export const InputContainer = styled.div `
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
//   align-items: center;
//   height: 20%;
//   width: 100%;
// `


// export const FormContainer = styled.div`
//   width: 85%;
//   max-width: 600px;
//   background: #fff;
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%,-50%);
//   padding: 30px 40px;
//   box-sizing: border-box;
//   border-radius: 8px;
//   text-align: center;
//   box-shadow: 0 0 20px #000000b3;
//   ${'' /* font-family: "Montserrat",sans-serif; */}

//   ${'' /* height: 600px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   background: #010606;
//   padding: 25px 50px 75px 100px;

//   @media screen and (max-width: 768px) {
//     height: 800px;
//   }
//   @media screen and (max-width: 640px) {
//     height: 800px;
//   } */}
// `;

// export const FormH4 = styled.h4 `
//   margin-top: 0;
//   font-weight: 200;
//   color: #fff;
// `

// export const FormWrap = styled.div `
//   border: 1px solid gray;
//   margin: 8px 0;
//   padding: 12px 18px;
//   border-radius: 8px;
// `

// export const FormLabel = styled.label `
//   display: block;
//   text-align: left;
//   color: #333;
//   text-transform: uppercase;
//   font-size: 14px;
// `

// export const FormInput = styled.input `
//   width: 100%;
//   border: none;
//   background: none;
//   outline: none;
//   font-size: 18px;
//   margin-top: 6px
// `

// export const FormMessage = styled.textarea `
//   width: 100%;
//   border: none;
//   background: none;
//   outline: none;
//   font-size: 18px;
//   margin-top: 6px
// `