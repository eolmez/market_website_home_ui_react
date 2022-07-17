import Button from "../Button/Button";
import { H1, H3, PText } from "../../globalStyles";
import {
  Card,
  Card1Logo,
  Card2Logo,
  Card3Logo,
  HeroBottom,
  HeroImg,
  HeroTop,
  HeroWrapper,
  TopLeft,
  TopRight,
} from "./HeroStyles";
import img from "../../images/hero-image.png";
import { IconContext } from "react-icons";

const Hero = () => {
  return (
    <IconContext.Provider value={{ size: "100px" }}>
      <HeroWrapper>
        <HeroTop>
          <TopLeft>
            <H1 green>Taze ve Doğal</H1>
            <H1>Ürünler</H1>
            <PText>Sağlıklı ve taze ürünleri</PText>
            <PText>Size Ulaştırıyoruz</PText>
            <Button heroBtn>Ürünleri Keşfet</Button>
          </TopLeft>
          <TopRight>
            <HeroImg src={img} />
          </TopRight>
        </HeroTop>
        <HeroBottom>
          <Card first>
            <H3 green>Neden Biz?</H3>
            <Card1Logo />
            <H3>%100 DOĞAL</H3>
            <PText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </PText>
          </Card>
          <PText dot>. . .</PText>
          <Card green>
            <Card2Logo />
            <H3>%100 DOĞAL</H3>
            <PText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </PText>
          </Card>
          <PText dot>. . .</PText>
          <Card>
            <Card3Logo />
            <H3>%100 DOĞAL</H3>
            <PText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </PText>
          </Card>
        </HeroBottom>
      </HeroWrapper>
    </IconContext.Provider>
  );
};

export default Hero;
