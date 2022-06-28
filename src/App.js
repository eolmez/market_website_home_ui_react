import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import "./style/global.css";
function App() {
  return (
    <Router>
      <Navbar />
      <Home to="/" />
      <Footer />
    </Router>
  );
}

export default App;
