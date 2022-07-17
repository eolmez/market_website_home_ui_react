import Hero from "../../components/Hero/Hero";
import Products from "../../components/Products/Products";
import Reviews from "../../components/Reviews/Reviews";

const Home = ({ favorites }) => {
  return (
    <>
      <Hero />
      <Products favorites={favorites} />
      <Reviews />
    </>
  );
};

export default Home;
