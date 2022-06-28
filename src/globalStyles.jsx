import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{    
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: 2px solid #61b15a;
  border-radius: 15px;
  width: 150px;
  height: 40px;
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;

  ${(props) =>
    props.navGreen &&
    css`
      background: #61b15a;
      color: white;
      height: 40px;
      border: none;
      margin-right: 10px;
      margin-left: 100px;
    `}
  ${(props) =>
    props.heroBtn &&
    css`
      background: #61b15a;
      color: white;
      width: 170px;
      border: none;
      margin-top: 1rem;
    `}

  ${(props) =>
    props.plus &&
    css`
      width: 30px;
      height: 30px;
      font-size: 1.5rem;
      color: #61b15a;
      border: none;
      border-radius: 30px 30px 0 0;
      box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    `}

    ${(props) =>
    props.minus &&
    css`
      width: 30px;
      height: 30px;
      font-size: 1.5rem;
      color: #61b15a;
      border: none;
      border-radius: 0 0 30px 30px;
      box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    `}
    ${(props) =>
    props.cardBtn &&
    css`
      background: #61b15a;
      color: white;
      width: 170px;
      border: none;
      width: 80%;
      margin-top: 2rem;
    `}
`;

export const H1 = styled.h1`
  font-size: 4rem;
  font-weight: 700;
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
export const H3 = styled.div`
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
export const PText = styled.div`
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
    props.name &&
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
