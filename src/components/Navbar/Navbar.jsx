import { useContext } from "react";
import { AppContext } from "../../App";
import { AiOutlineSearch } from "react-icons/ai";
import Button from "../Button/Button";
import {
  Nav,
  NavbarContainer,
  NavTop,
  TopWrapper,
  NavBottom,
  NavLogo,
  InputArea,
  NavInput,
  Basket,
  Counter,
  CartIcon,
  NavMenu,
  NavItem,
  BottomWrapper,
  IconLink,
  Buttons,
  TopMid,
} from "./NavbarStyles";

const Navbar = () => {
  const context = useContext(AppContext);

  const totalCartAmount = context.cart
    .reduce((total, item) => (total += item.count * item.price), 0)
    .toFixed(2);
  return (
    <Nav>
      <NavbarContainer>
        <NavTop>
          <TopWrapper>
            <NavLogo to="/">fresh</NavLogo>
            <TopMid>
              <InputArea>
                <AiOutlineSearch></AiOutlineSearch>
                <NavInput type="search" placeholder="Arama" />
              </InputArea>

              <Basket>
                <Counter>
                  <p>Sepetim - </p>
                  {totalCartAmount}
                </Counter>
                <IconLink to="/cart">
                  <CartIcon />
                </IconLink>
              </Basket>
            </TopMid>
            <Buttons>
              <Button navGreen>Üye ol</Button>
              <Button navWhite> Giriş Yap</Button>
            </Buttons>
          </TopWrapper>
        </NavTop>
        <NavBottom>
          <BottomWrapper>
            <NavMenu>
              <NavItem>Süt ve Kahvaltılık</NavItem>
              <NavItem>Organik Ürünler</NavItem>
              <NavItem>Arı Ürünleri</NavItem>
              <NavItem>Anne ve Bebek</NavItem>
              <NavItem>Meyve Sebzeler</NavItem>
            </NavMenu>
          </BottomWrapper>
        </NavBottom>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
