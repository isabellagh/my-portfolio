import styled from "styled-components";

export const ContactContainer = styled.div`
  height: 950px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;
  padding: 25px 50px 75px 100px;

  @media screen and (max-width: 768px) {
    height: 800px;
  }
  @media screen and (max-width: 640px) {
    height: 1100px;
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

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (max-width: 640px) {
    grid-template-columns: 1fr 1fr;
    padding: 0 10px;
  }
`;

export const ContactCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 340px;
  padding: 10px;
`;

export const ContactsImg = styled.img`
  display: flex;

  height: 40px;
  width: 45px;
  padding: 0 3px;

  &:hover {
    transform: scale(1.1);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ContactsH2 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-top: 64px;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const SkillsP = styled.p`
  font-size: 20px;
  text-align: center;
  color: white;
  margin-bottom: 18px;
`;

export const DownloadButton = styled.button`
  display: block;
  background-color: #01bf71;
  color: #0f0f10;
  font-size: 16px;
  border: 0;
  border-radius: 1.5rem;
  height: 30px;
  width: 40%;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
  margin-top: 20px;
  margin-bottom: 20px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #ccf0d0;
    color: #010606;
    text-decoration: none;
  }
`;
