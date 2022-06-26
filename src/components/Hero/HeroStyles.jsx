import styled, { css } from "styled-components";
import { GiStrawberry, GiBroccoli, GiCarrot } from "react-icons/gi";

export const HeroWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const HeroTop = styled.div`
  margin-top: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 70%;
`;
export const TopLeft = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const TopRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
`;

export const HeroImg = styled.img`
  object-fit: cover;
`;

export const HeroBottom = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 10rem;
  width: 70%;
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
`;

export const Card1Logo = styled(GiStrawberry)``;
export const Card2Logo = styled(GiBroccoli)``;
export const Card3Logo = styled(GiCarrot)``;
