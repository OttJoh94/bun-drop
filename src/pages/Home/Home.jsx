import React, { useState } from "react";
import "./Home.css";
import Welcome from "../../components/Welcome/Welcome";
import CategorySelector from "../../components/CategorySelector/CategorySelector";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import FavoritesList from "../../components/FavoritesList/FavoritesList";

function Home({
  cartIsEmpty,
  setCartIsEmpty,
  cart,
  setCart,
  isSignedIn,
  signedInUser,
  setSignedInUser,
}) {
  const [category, setCategory] = useState("all");
  return (
    <>
      <Welcome />
      {isSignedIn && (
        <FavoritesList
          cart={cart}
          setCart={setCart}
          isSignedIn={isSignedIn}
          signedInUser={signedInUser}
        />
      )}
      <CategorySelector category={category} setCategory={setCategory} />
      <FoodDisplay
        category={category}
        cartIsEmpty={cartIsEmpty}
        setCartIsEmpty={setCartIsEmpty}
        cart={cart}
        setCart={setCart}
        isSignedIn={isSignedIn}
        signedInUser={signedInUser}
        setSignedInUser={setSignedInUser}
      />
    </>
  );
}

export default Home;
