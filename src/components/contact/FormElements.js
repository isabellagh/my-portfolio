import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 90vh;
  width: 30vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  letter-spacing: 0.4rem;
  max-width: 700px;
`;

export const ContactsH2 = styled.h2`
  margin: 2rem 0 2rem 0;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 40%;
  width: 100%;
`;

export const StyledInput = styled.input`
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
`;

export const ButtonContainer = styled.div`
  margin: 1rem 0 1rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledButton = styled.input`
  display: block;
  background-color: #01bf71;
  color: #0f0f10;
  font-size: 18px;
  border: 0;
  border-radius: 1.5rem;
  height: 40px;
  width: 80%;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
  margin-top: 20px;
  margin-bottom: 20px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #ccf0d0;
    color: #010606;
  }
`;

export const SocialMedia = styled.h3`
  margin: 1rem 0 1rem 0;
`;

export const HorizontalRule = styled.hr`
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
`;

export const FormTextArea = styled.textarea`
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
`;
