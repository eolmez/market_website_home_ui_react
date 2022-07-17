import styled from "styled-components";

export const CartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 7rem;
  margin-right: auto;
  margin-left: auto;
  width: 1200px;
  @media screen and (max-width: 960px) {
  }
`;

export const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: 100%;
  padding: 2rem;

  H2 {
    text-decoration: underline gray;
    text-underline-offset: 10px;
    color: #92b54c;
  }
`;
export const CartCards = styled.div`
  margin-top: 1rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 400px);
  row-gap: 3rem;
`;
