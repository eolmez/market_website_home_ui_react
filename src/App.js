import { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyle from "./globalStyles";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Footer from "./components/Footer/Footer";
import ProductsData from "./data/ProductsData";

export const AppContext = createContext();

function App() {
  const [state, setState] = useState((state) => ({
    cart: [],
  }));

  useEffect(() => {
    const cartOnLocalStorage = localStorage.getItem("cart");
    if (cartOnLocalStorage) {
      setState({ ...state, cart: JSON.parse(localStorage.getItem("cart")) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  const addToCart = (id) => {
    const product = ProductsData.find((cardItem) => {
      return cardItem.id === id;
    });
    setState({
      ...state,
      cart: [...state.cart, { ...product, count: 1 }],
    });
  };
  const removeFromCart = (id) => {
    setState({
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== id),
    });
  };

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
