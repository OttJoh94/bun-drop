import React, { useEffect, useState } from "react";
import "./FoodDisplay.css";
import useFetch from "../../hooks/useFetch";
import FoodItem from "../FoodItem/FoodItem";
import useLocalStorage from "../../hooks/useLocalStorage";

function FoodDisplay({ category, cartIsEmpty, setCartIsEmpty, cart, setCart }) {
  const [allFoods, setAllFoods] = useState([]);
  const [foodList, setFoodList] = useState([]);
  const cartStorage = useLocalStorage();

  const { data, loading, error } = useFetch("http://localhost:3010/food");

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
    cartStorage.addToLocalStorageCart(foodToAdd);
    setCart(cartStorage.getCart());
  }

  function handleRemoveFromCart(foodToRemove) {
    cartStorage.removeFromLocalStorage(foodToRemove);
    setCart(cartStorage.getCart());
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
        {foodList.map((f) => (
          <FoodItem
            key={f.id}
            food={f}
            className="food-item"
            addToCart={handleAddToCart}
            removeFromCart={handleRemoveFromCart}
          />
        ))}
      </div>
    </div>
  );
}

export default FoodDisplay;
