import { useState } from "react";
import { H2, H3 } from "../../globalStyles";
import Card from "../Card/Card";
import {
  CardOne,
  CarTwo,
  CardThree,
  CardFour,
  CardFive,
  CardSix,
} from "../Card/CardData";
import { ProductCards, ProductHeader, ProductWrapper } from "./ProductsStyles";
const Products = () => {
  const data = { CardOne, CarTwo, CardThree, CardFour, CardFive, CardSix };
  const [count, setCount] = useState(0);

  const counter = (e) => {
    if (e.target.value === "+") {
      setCount((count) => count + 1);
    } else if (count === 0 && e.target.value === "-") {
      setCount(count === 0);
    } else if (e.target.value === "-") {
      setCount((count) => count - 1);
    }
  };
  return (
    <ProductWrapper>
      <ProductHeader>
        <H2>Öne Çıkanlar</H2>
        <H3 green>Tümünü gör</H3>
      </ProductHeader>
      <ProductCards>
        {Object.keys(data).map((key) => {
          const card = data[key];
          return (
            <Card
              id={card.id}
              image={card.image}
              description={card.description}
              amount={card.amount}
              price={card.price}
              discountPrice={card.discountPrice}
              counter={counter}
              count={count}
            />
          );
        })}
      </ProductCards>
    </ProductWrapper>
  );
};

export default Products;
