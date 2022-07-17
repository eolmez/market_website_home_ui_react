import styled from "styled-components";

export const ReviewsWrapper = styled.div`
  background: #f1fff4;
  width: 1200px;
  height: 50rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
  margin-top: 10rem;
`;

export const CardsWrapper = styled.div`
  display: flex;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background: white;
  padding: 3rem;
  width: 20rem;
  height: 25rem;
  border-radius: 50px;
  margin: 1rem;
`;

export const CardHeader = styled.div`
  display: flex;
`;

export const CustomerImg = styled.img`
border: 1px solid black;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  margin-right: 2rem;
`;
