import React, { useEffect, useState } from "react";
import "./FoodDisplay.css";
import useFetch from "../../hooks/useFetch";
import FoodItem from "../FoodItem/FoodItem";
import useLocalStorage from "../../hooks/useLocalStorage";

function FoodDisplay({
  category,
  cartIsEmpty,
  setCartIsEmpty,
  cart,
  setCart,
  isSignedIn,
  signedInUser,
  setSignedInUser,
}) {
  const [allFoods, setAllFoods] = useState([]);
  const [foodList, setFoodList] = useState([]);
  const [favoriteList, setFavoriteList] = useState([]);
  const useStorage = useLocalStorage();

  const { data, loading, error } = useFetch("http://localhost:3010/food");

  //Den här körs när favorites ändras
  useEffect(() => {
    if (Object.keys(signedInUser).length > 0) {
      //Ändra localStorage
      useStorage.setSignedInUser(signedInUser);

      //Uppdatera user i databasen
      const putOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(signedInUser),
      };

      fetch(`http://localhost:3010/users/${signedInUser.id}`, putOptions);
    }
  }, [signedInUser]);

  useEffect(() => {
    if (signedInUser && signedInUser.favorites) {
      setFavoriteList(signedInUser.favorites);
    } else {
      setFavoriteList([]);
    }
  }, [signedInUser]);

  useEffect(() => {
    if (data) {
      setAllFoods(data);
      setFoodList(data);
    }
  }, [data]);

  useEffect(() => {
    if (category !== "all") {
      const filteredFood = allFoods.filter((f) => f.category === category);
      setFoodList(filteredFood);
    } else {
      setFoodList(allFoods);
    }
  }, [category]);

  function handleAddToCart(foodToAdd) {
    useStorage.addToLocalStorageCart(foodToAdd);
    setCart(useStorage.getCart());
  }

  function handleRemoveFromCart(foodToRemove) {
    useStorage.removeFromLocalStorage(foodToRemove);
    setCart(useStorage.getCart());
  }

  useEffect(() => {
    if (cart.length === 0) {
      setCartIsEmpty(true);
    } else {
      setCartIsEmpty(false);
    }
  }, [cart]);

  return (
    <div className="food-display" id="food-display">
      <div className="food-display-list">
        {foodList.map((f) => {
          const userFavorite =
            isSignedIn && favoriteList.some((u) => u.id === f.id);

          return (
            <FoodItem
              key={f.id}
              food={f}
              className="food-item"
              addToCart={handleAddToCart}
              removeFromCart={handleRemoveFromCart}
              userFavorite={userFavorite}
              signedInUser={signedInUser}
              setSignedInUser={setSignedInUser}
            />
          );
        })}
      </div>
    </div>
  );
}

export default FoodDisplay;
