import { H2, PText } from "../../globalStyles";
import {
  About,
  Communication,
  ContentWrapper,
  Facebook,
  FooterLogo,
  FooterWrapper,
  Instagram,
  Line,
  Rights,
  Social,
  SocialButtons,
  Twitter,
} from "./FooterStyles";

import { IconContext } from "react-icons";
const Footer = () => {
  return (
    <IconContext.Provider value={{ size: "30px" }}>
      <FooterWrapper>
        <ContentWrapper>
          <Social>
            <FooterLogo to="/">fresh</FooterLogo>
            <SocialButtons>
              <Instagram />
              <Facebook />
              <Twitter />
            </SocialButtons>
          </Social>
          <About>
            <H2 green>Hakkında</H2>
            <PText footer>Hakkımızda</PText>
            <PText footer>Gizlilik Politikası</PText>
            <PText footer>Teslimat ve İade</PText>
            <PText footer>KVKK Aydınlatma Metni</PText>
            <PText footer>Şartlar ve Koşullar</PText>
          </About>
          <Communication>
            <H2 green>İletişim</H2>
            <PText footer>Adres: Örnek Caddesi, Örnek Mahallesi, No:149</PText>
            <PText footer>Fatih/İstanbul</PText>
            <PText footer>Telefon: (+90) 212 121 2112</PText>
            <PText footer>Email: örnek@mail.com</PText>
          </Communication>
        </ContentWrapper>
        <Line />
        <Rights>© copyright, 2022</Rights>
      </FooterWrapper>
    </IconContext.Provider>
  );
};

export default Footer;
