import styled from "styled-components";

export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 7rem;
  margin-right: auto;
  margin-left: auto;
  width: 100%;
`;

export const ProductHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: 65%;
  padding: 2rem;

  H2 {
    text-decoration: underline gray;
    text-underline-offset: 10px;
    color: #92b54c;
  }
`;
export const ProductCards = styled.div`
  margin-top: 1rem;
  width: 65%;
  display: grid;
  grid-template-columns: repeat(3, 450px);
  column-gap: 1rem;
  row-gap: 3rem;
`;
