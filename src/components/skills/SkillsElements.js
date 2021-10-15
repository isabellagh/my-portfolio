import styled from "styled-components";

export const SkillContainer = styled.div`
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }
  @media screen and (max-width: 640px) {
    height: 1300px;
  }
`;

  /* @media only screen and (max-device-width: 640px) {
      height: 1100px;
  }
  @media only screen and (max-device-width: 768px) {
      height: 1300px;
  }
` */

export const SkillWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;
  
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    padding: 0 10px;
  }
`

export const SkillCard = styled.div`
  background: #E8E7EC;  
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 10px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
      transform: scale(1.02);
      transition: all 0.2s ease-in-out;
      cursor: pointer;
  }
`

export const SkillsImg = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`

export const SkillsH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-top: 64px;
  margin-bottom: 64px;
  
  @media screen and (max-width: 480px) {
      font-size: 2rem;
  }
`

export const SkillsH2 = styled.h1`
  font-size: 1rem;
  margin-bottom: 10px;
`

export const SkillsP = styled.p`
  font-size: 1rem;
  text-align: center;
`

// export const BtnWrap = styled.div`
//   display: flex;
//   justify-content: flex-start;
// `