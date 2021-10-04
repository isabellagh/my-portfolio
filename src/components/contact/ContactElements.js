import styled from "styled-components";

export const ContactContainer = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;
  padding: 25px 50px 75px 100px;

@media screen and (max-width: 768px) {
    height: 500px;
  }
  @media screen and (max-width: 480px) {
    height: 1300px;
  } 
`;

export const ContactWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    padding: 0 10px;
`;

export const ContactCard = styled.div`
  background: #black;
  display: flex;
  ${'' /* flex-direction: column; */}
  justify-content: center;
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
`;

export const ContactsImg = styled.img`
  display: flex;
  ${'' /* justify-content: center; */}
  ${'' /* align-items: center; */}
  height: 50px;
  width: 50px;
  ${'' /* margin-bottom: 10px; */}
  padding: 0 3px;
`;

export const ContactsH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-top: 64px;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;
