import styled from "styled-components";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20rem;
  height: 25rem;
  border-radius: 50px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const CardTop = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const CardImg = styled.img`
  width: 150px;
  height: 150px;
  margin-right: 30px;
`;

export const Counter = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  justify-self: flex-end;
  margin-right: -70px;
`;

export const Count = styled.span`
  background: #61b15a;
  color: white;
  box-shadow: 2px 0 0 0 rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
`;

export const CardMiddle = styled.div`
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
  display: flex;
  align-self: flex-start;
  margin-left: 1rem;
`;
