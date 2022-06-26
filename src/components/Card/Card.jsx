import { Button, PText } from "../../globalStyles";
import {
  CardBottom,
  CardImg,
  CardMiddle,
  CardText,
  CardTop,
  CardWrapper,
  Count,
  Counter,
  FavoriteBtn,
  IconWrapper,
  RedFavoriteBtn,
} from "./CardStyles";

import { IconContext } from "react-icons";
import { useState } from "react";

const Card = ({
  image,
  description,
  amount,
  price,
  discountPrice,
  counter,
  count,
}) => {
  const [like, setLike] = useState(false);
  return (
    <IconContext.Provider value={{ size: "30px" }}>
      <CardWrapper>
        <CardTop>
          <CardImg src={image}></CardImg>
          <Counter>
            <Button plus value="+" onClick={counter}>
              +
            </Button>
            <Count>{count}</Count>
            <Button minus value="-" onClick={counter}>
              -
            </Button>
          </Counter>
        </CardTop>
        <CardMiddle>
          <CardText>
            <PText description>{description}</PText>
            <PText amount>{amount}</PText>
          </CardText>
          <IconWrapper>
            {like ? (
              <RedFavoriteBtn onClick={() => setLike(false)} />
            ) : (
              <FavoriteBtn onClick={() => setLike(true)} />
            )}
          </IconWrapper>
        </CardMiddle>
        <CardBottom>
          <PText price>{price}</PText>
          <PText discountPrice>{discountPrice}</PText>
        </CardBottom>
        <Button cardBtn>Sepete Ekle</Button>
      </CardWrapper>
    </IconContext.Provider>
  );
};

export default Card;
