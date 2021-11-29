import styled from "styled-components";
import { Link as LinkS } from "react-scroll";


export const AboutContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 850px;
  position: relative;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;

export const AboutBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const AboutContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  max-height: 40px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AboutH1 = styled.h1`
  ${'' /* color: #fff; */}
  color: #252839;
  font-size: 40px;
  text-align: center;
  position: relative;
  -webkit-text-stroke: 0.3vw #383d52;
  text-transform: uppercase;

  ::before {
    content:attr(data-text);
    position:absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    color: #01bf71;
    -webkit-text-stroke: 0vw #383d52;
    border-right: 2px solid #01bf71;
    overflow: hidden;
    animation: animate 6s linear infinite;
  }

  @keyframes animate {
    0%, 10%, 100%
    {
      width: 0;
    }
    70%,90%
    {
      width:100%
    }
  }

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const AboutP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 20px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 15px;
  }
`;

export const AboutBtnLink = styled(LinkS)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-top: 20px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #CCF0D0;
    color: #010606;
  }
`;