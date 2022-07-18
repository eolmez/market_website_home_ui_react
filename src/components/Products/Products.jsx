import { H2, H3 } from "../../globalStyles";
import Card from "../Card/Card";
import { ProductCards, ProductHeader, ProductWrapper } from "./ProductsStyles";
import { AppContext } from "../../App";
import { useContext } from "react";
import ProductsData from "../../data/ProductsData";

const Products = () => {
  const context = useContext(AppContext);

  const addHandleToCart = (product) => {
    context.addToCart(product);
  };

  const favoriteProducts =
    JSON.parse(localStorage.getItem("favoritesProducts")) || [];

  const findCount = (id) => {
    const productInCart = context.cart.find((cartItem) => {
      return cartItem.id === id
    });
    
    const count = productInCart ?  productInCart.count : 0;
    return count;
  };


  return (
    <ProductWrapper>
      <ProductHeader>
        <H2>Öne Çıkanlar</H2>
        <H3 green>Tümünü gör</H3>
      </ProductHeader>
      <ProductCards>
        {ProductsData.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            image={product.image}
            description={product.description}
            amount={product.amount}
            price={product.price}
            discountPrice={product.discountPrice}
            isFavorite={favoriteProducts.includes(product.id)}
            favoriteProducts={favoriteProducts}
            product={product}
            addHandleToCart={addHandleToCart}
            count={findCount(product.id)}
          />
        ))}
      </ProductCards>
    </ProductWrapper>
  );
};

export default Products;
