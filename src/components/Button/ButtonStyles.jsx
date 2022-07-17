import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: 2px solid #61b15a;
  border-radius: 40px;
  width: 100px;
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
      margin-left: 50px;
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
      width: 50px;
      height: 50px;
      font-size: 1.5rem;
      color: #61b15a;
      border: none;
      border-radius: 15px 15px 0 0;
      box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    `}

    ${(props) =>
    props.minus &&
    css`
      width: 50px;
      height: 50px;
      font-size: 1.5rem;
      color: #61b15a;
      border: none;
      border-radius: 0 0 15px 15px;
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
