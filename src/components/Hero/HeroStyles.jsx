import styled, { css } from "styled-components";
import { GiStrawberry, GiBroccoli, GiCarrot } from "react-icons/gi";

export const HeroWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 1200px;
    margin-left: auto;
  }
`;

export const HeroTop = styled.div`
  margin-top: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 1100px;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
  }
`;
export const TopLeft = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 50%;

  @media screen  and (max-width: 960px){
    margin-left: 50px;
    width: 100%;
  }
`;

export const TopRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 50%;
  margin-left: auto;
`;

export const HeroImg = styled.img`
  object-fit: cover;
  width: 100%;
  margin-right: 50px;
`;

export const HeroBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10rem;
  width: 1200px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  padding: 2.5rem;
  width: 20rem;
  height: 25rem;
  border: 1px solid none;
  border-radius: 30px;

  ${(props) =>
    props.green &&
    css`
      background: #92b54c;
      color: white;
      margin-left: 1rem;
      margin-right: 1rem;
    `}

  ${(props) =>
    props.first &&
    css`
      height: 30rem;
      justify-content: space-evenly;
      margin-bottom: 3rem;
    `}
`;

export const Card1Logo = styled(GiStrawberry)``;
export const Card2Logo = styled(GiBroccoli)``;
export const Card3Logo = styled(GiCarrot)``;
