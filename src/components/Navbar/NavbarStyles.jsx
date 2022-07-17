import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  z-index: 999;
  width: 100%;
  margin: 0 auto;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const NavbarContainer = styled.div`
  z-index: 1;
  width: 100%;
  margin: 0 auto;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

export const NavTop = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (max-width: 960px) {
    margin-left: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 960px;
  }
`;

export const TopWrapper = styled.div`
  width: 1100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  margin-top: 15px;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-left: 200px;
  }
`;

export const NavLogo = styled(Link)`
  color: #61b15a;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 40px;
  font-weight: 700;
  display: flex;
  align-items: center;
`;

export const TopMid = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-left: 10rem;
`

export const InputArea = styled.div`
  position: relative;
  margin-left: -90px;
  svg {
    position: absolute;
    top: 50%;
    left: 80%;
    transform: translate(100%, -50%);
    color: #d3d3d3;
  }
`;

export const NavInput = styled.input`
  border: 1px solid #d3d3d3;
  border-radius: 40px;
  width: 20rem;
  height: 40px;

  &::placeholder {
    padding: 1rem;
    color: #d3d3d3;
    font-weight: 600;
  }
`;

export const Basket = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Counter = styled.div`
  border: 1px solid gray;
  border-right: 0;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #61b15a;
  font-size: 16px;
  height: 2rem;
  width: 10rem;
  padding: 5px;

  p {
    color: black;
    font-size: 16px;
    font-weight: 700;
  }
`;

export const IconLink = styled(Link)``;

export const CartIcon = styled(AiOutlineShoppingCart)`
  border: 1px solid gray;
  border-radius: 0 5px 5px 0;
  height: 2rem;
  width: 4rem;
  margin-left: -3px;
  cursor: pointer;
  margin-top: 0.4rem;
`;

export const Buttons = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

export const NavBottom = styled.div`
  background: #61b15a;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export const BottomWrapper = styled.div`
  width: 1100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
`;

export const NavMenu = styled.ul`
  width: 1100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  text-align: center;
`;

export const NavItem = styled.div`
  display: flex;
  align-items: center;
  color: white;
  height: 50px;
  font-weight: 500;
  font-size: 1.1rem;
  cursor: pointer;
`;
