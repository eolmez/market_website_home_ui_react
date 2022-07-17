import styled, { css, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "M PLUS Rounded 1c", sans-serif;
}

`;
export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;
  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const H1 = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  ${(props) =>
    props.green &&
    css`
      color: #61b15a;
    `}
`;
export const H2 = styled.h2`
  font-size: 30px;
  font-weight: 600;
  ${(props) =>
    props.green &&
    css`
      color: #61b15a;
      text-decoration: underline gray;
      text-underline-offset: 10px;
      margin-bottom: 2rem;
    `}
`;
export const H3 = styled.h3`
  font-size: 20px;
  font-weight: 500;
  ${(props) =>
    props.green &&
    css`
      color: #92b54c;
      text-decoration: underline;
      text-underline-offset: 10px;
    `}
`;
export const PText = styled.p`
  font-size: 1.4rem;
  font-weight: 500;

  ${(props) =>
    props.dot &&
    css`
      color: #92b54c;
      font-size: 2.5rem;
      font-weight: 700;
    `}

  ${(props) =>
    props.description &&
    css`
      font-weight: 700;
    `}

    ${(props) =>
    props.amount &&
    css`
      font-size: 1.1rem;
    `}

    ${(props) =>
    props.price &&
    css`
      color: #92b54c;
      font-size: 1.5rem;
    `}

    ${(props) =>
    props.discountPrice &&
    css`
      color: gray;
      font-size: 1.5rem;
      text-decoration: line-through;
      margin-left: 0.7rem;
      font-size: 1rem;
      margin-top: 0.5rem;
    `}

    ${(props) =>
    props.author &&
    css`
      font-weight: 600;
    `}

    ${(props) =>
    props.review &&
    css`
      font-weight: 400;
      font-size: 1rem;
      color: gray;
      margin-top: 2rem;
      letter-spacing: 1px;
    `}

  ${(props) =>
    props.footer &&
    css`
      margin-bottom: 0.5rem;
      font-weight: 600;
    `}
`;

export default GlobalStyle;
