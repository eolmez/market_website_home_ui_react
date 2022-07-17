import { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import CardData from "./components/Card/CardData";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Footer from "./components/Footer/Footer";

export const AppContext = createContext();

function App() {
  const [state, setState] = useState((state) => ({
    productList: CardData,
    cart: [],
  }));

  useEffect(() => {
    setState({ ...state, cart: JSON.parse(localStorage.getItem("cart")) });
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  const addToCart = (product) =>
    setState({
      ...state,
      cart: state.cart.find((cartItem) => cartItem.id === product.id)
        ? state.cart.map((cartItem) =>
            cartItem.id === product.id
              ? { ...cartItem, count: cartItem.count + 1 }
              : cartItem
          )
        : [...state.cart, { ...product, count: 1 }],
    });

  const removeFromCart = (id) =>
    setState({
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== id),
    });

  const increaseCount = (id) => {
    setState({
      ...state,
      cart: state.cart.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, count: cartItem.count + 1 }
          : cartItem
      ),
    });
  };

  const decreaseCount = (id) => {
    setState({
      ...state,
      cart: state.cart.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, count: cartItem.count > 1 ? cartItem.count - 1 : 1 }
          : cartItem
      ),
    });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        addToCart,
        removeFromCart,
        increaseCount,
        decreaseCount,
      }}
    >
      <Router>
        <GlobalStyle />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </AppContext.Provider>
  );
}

export default App;
