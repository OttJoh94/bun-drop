import React, { useState } from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Welcome from "../../components/Welcome/Welcome";
import CategorySelector from "../../components/CategorySelector/CategorySelector";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";

function Home({ cartIsEmpty, setCartIsEmpty, cart, setCart }) {
  const [category, setCategory] = useState("all");
  return (
    <>
      <Welcome />
      <CategorySelector category={category} setCategory={setCategory} />
      <FoodDisplay
        category={category}
        cartIsEmpty={cartIsEmpty}
        setCartIsEmpty={setCartIsEmpty}
        cart={cart}
        setCart={setCart}
      />
    </>
  );
}

export default Home;
