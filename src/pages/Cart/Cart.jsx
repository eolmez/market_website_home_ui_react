import { useContext } from "react";
import { AppContext } from "../../App";
import { CartWrapper, CartHeader, CartCards } from "./CartStyles";
import Card from "../../components/Card/Card";
import { H2, H3 } from "../../globalStyles";
import { useState } from "react";

const Cart = () => {
  const context = useContext(AppContext);

  const [isCart, setIsCart] = useState(true);

  const handleRemoveFromCart = (id) => {
    context.removeFromCart(id);
  };

  const totalCartItems = context.cart.reduce(
    (total, item) => (total += item.count),
    0
  );

  return (
    <CartWrapper>
      <CartHeader>
        <H2>Sepet Listesi</H2>
        <H3 green>Sepet ({totalCartItems})</H3>
      </CartHeader>
      <CartCards>
        {context.cart.legnth < 1
          ? "Sepetnizde hiç ürün yok"
          : context.cart.map((product) => (
              <Card
                key={product.id}
                id={product.id}
                image={product.image}
                description={product.description}
                amount={product.amount}
                price={product.price}
                discountPrice={product.discountPrice}
                product={product}
                isCart={isCart}
                handleRemoveFromCart={handleRemoveFromCart}
                count={product.count}
              />
            ))}
      </CartCards>
    </CartWrapper>
  );
};

export default Cart;
