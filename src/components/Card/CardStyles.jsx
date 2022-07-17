import styled from "styled-components";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 375px;
  height: 35rem;
  border-radius: 50px;
  border: 1px solid rgba(0, 0, 0, 0.2);
`;

export const CardTop = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const CardImg = styled.img`
  width: 200px;
  height: 200px;
`;

export const CardMiddle = styled.div`
  margin-top: 40px;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const CardText = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
`;

export const IconWrapper = styled.div`
  cursor: pointer;
`;

export const FavoriteBtn = styled(AiOutlineHeart)``;

export const RedFavoriteBtn = styled(AiFillHeart)`
  color: red;
`;

export const CardBottom = styled.div`
  margin-top: 30px;
  display: flex;
  align-self: flex-start;
  margin-left: 1rem;
`;
