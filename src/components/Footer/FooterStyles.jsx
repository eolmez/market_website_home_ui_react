import styled from "styled-components";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { Link } from "react-router-dom";

export const FooterWrapper = styled.footer`
  background: #ececec;
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 1250px;
  margin-top: 3rem;
`;

export const Social = styled.div``;

export const FooterLogo = styled(Link)`
  color: #61b15a;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 50px;
  font-weight: 700;
  display: flex;
  align-items: center;
`;

export const SocialButtons = styled.section`
  display: flex;
  justify-content: space-between;
  color: #61b15a;
`;

export const Instagram = styled(AiFillInstagram)``;

export const Facebook = styled(AiFillFacebook)``;

export const Twitter = styled(AiFillTwitterSquare)``;

export const About = styled.section``;

export const Communication = styled.section``;

export const Line = styled.hr`
  margin-top: 5rem;
  width: 1200px;
  border-top: 3px solid #848482;
  border-radius: 5px;
`;

export const Rights = styled.small`
  margin-top: 3rem;
  margin-bottom: 3rem;
  font-size: 15px;
  color: #848482;
`;
