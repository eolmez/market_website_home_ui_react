import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Home to="/" />
      <Footer />
    </Router>
  );
}

export default App;
