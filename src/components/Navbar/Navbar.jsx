import {
  Nav,
  NavbarContainer,
  NavTop,
  TopWrapper,
  NavBottom,
  NavLogo,
  NavIcon,
  NavInput,
  Basket,
  Counter,
  CartIcon,
  NavMenu,
  NavItem,
  BottomWrapper,
} from "./NavbarStyles";
import {Button} from "../../globalStyles"
const Navbar = () => {
  return (
    <Nav>
      <NavbarContainer>
        <NavTop>
          <TopWrapper>
            <NavLogo to="/">
              <NavIcon />
              fresh
            </NavLogo>
            <NavInput placeholder="Arama" />
            <Basket>
              <Counter><p>Sepetim - </p>0.00</Counter>
              <CartIcon />
              <Button navGreen>Üye ol</Button>
              <Button navWhite> Giriş Yap</Button>
            </Basket>
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
