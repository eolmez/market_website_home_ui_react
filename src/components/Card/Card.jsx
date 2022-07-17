import { useState, useContext } from "react";
import { AppContext } from "../../App";
import { IconContext } from "react-icons";
import { motion } from "framer-motion";
import Counter from "../Counter/Counter";
import Button from "../Button/Button";
import { PText } from "../../globalStyles";
import {
  CardBottom,
  CardImg,
  CardMiddle,
  CardText,
  CardTop,
  CardWrapper,
  FavoriteBtn,
  IconWrapper,
  RedFavoriteBtn,
} from "./CardStyles";

const Card = ({
  id,
  image,
  description,
  amount,
  price,
  discountPrice,
  isFavorite,
  favoriteProducts,
  product,
  addHandleToCart,
  increaseCount,
  decreaseCount,
  count,
  isCart,
  handleRemoveFromCart,
}) => {
  const context = useContext(AppContext);
  const [like, setLike] = useState(isFavorite);
  const [isHovering, setIsHovering] = useState(false);

  const addFavorites = () => {
    setLike(true);
    const newFavoriteProducts = [...favoriteProducts];
    newFavoriteProducts.push(id);
    localStorage.setItem(
      "favoritesProducts",
      JSON.stringify(newFavoriteProducts)
    );
  };

  const removeFavorites = () => {
    setLike(false);
    const newFavoriteProducts = [...favoriteProducts].filter(
      (productId) => productId !== id
    );

    localStorage.setItem(
      "favoritesProducts",
      JSON.stringify(newFavoriteProducts)
    );
  };

  return (
    <IconContext.Provider value={{ size: "30px" }}>
      <CardWrapper
        id={id}
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 0px 12px 2px rgba(0,0,0,0.2)",
        }}
        onMouseOver={() => setIsHovering(true)}
        onMouseOut={() => setIsHovering(false)}
      >
        <CardTop>
          <CardImg src={image}></CardImg>

          <Counter
            id={id}
            count={count}
            increaseCount={increaseCount}
            decreaseCount={decreaseCount}
          />
        </CardTop>
        <CardMiddle>
          <CardText>
            <PText description>{description}</PText>
            <PText amount>{amount}</PText>
          </CardText>
          {isCart || (
            <IconWrapper>
              {like ? (
                <RedFavoriteBtn onClick={removeFavorites} />
              ) : (
                <FavoriteBtn onClick={addFavorites} />
              )}
            </IconWrapper>
          )}
        </CardMiddle>
        <CardBottom>
          <PText price>₺{price}</PText>
          <PText discountPrice>{discountPrice}</PText>
        </CardBottom>
        {isCart ? (
          <Button cardBtn onClick={() => handleRemoveFromCart(product.id)}>
            Sepetten Çıkar
          </Button>
        ) : (
          <Button cardBtn onClick={() => addHandleToCart(product)}>
            Sepete Ekle
          </Button>
        )}
      </CardWrapper>
    </IconContext.Provider>
  );
};

export default Card;
