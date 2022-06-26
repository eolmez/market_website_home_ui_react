import styled from "styled-components";
import { Link } from "react-router-dom";
import { FcShop } from "react-icons/fc";
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
`;

export const NavbarContainer = styled.div`
  z-index: 1;
  width: 100%;
  margin: 0 auto;
  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const NavTop = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const TopWrapper = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 15px;
`;

export const NavLogo = styled(Link)`
  color: #61b15a;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 60px;
  font-weight: 700;
  display: flex;
  align-items: center;
`;

export const NavIcon = styled(FcShop)`
  margin-right: 0.5rem;
`;

export const NavInput = styled.input`
  position: relative;
  border: 1px solid gray;
  border-radius: 30px;
  width: 15rem;
  height: 35px;
  margin-left: -50px;

  &::placeholder {
    padding: 1rem;
  }
`;

export const Basket = styled.div`
  display: flex;
  align-items: center;
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
  width: 9rem;
  padding: 5px;

  p {
    color: black;
    font-size: 16px;
    font-weight: 700;
  }
`;

export const CartIcon = styled(AiOutlineShoppingCart)`
  border: 1px solid gray;
  border-radius: 0 5px 5px 0;
  height: 2rem;
  width: 4rem;
  margin-left: -3px;
`;

export const NavBottom = styled.div`
  background: #61b15a;
`;

export const BottomWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
`;

export const NavMenu = styled.ul`
  width: 70%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  text-align: center;
`;

export const NavItem = styled.div`
  display: flex;
  align-items: center;
  color: white;
  height: 60px;
  font-weight: 500;
`;
