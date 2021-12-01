import styled from "styled-components";

export const FormContainer = styled.div `
margin-top: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 30vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(100, 100, 300,0.50);
  backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  ${'' /* text-transform: uppercase; */}
  letter-spacing: 0.4rem;
`

export const ContactsH2 = styled.h2 `
  margin: 3rem 0 2rem 0;
`

export const InputContainer = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
`


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