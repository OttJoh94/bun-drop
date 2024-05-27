import React from "react";
import "./FoodItem.css";
import add_icon_white from "../../assets/icons/add_icon_white.png";

function FoodItem({ food, addToCart }) {
  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={food.image} alt="" />
        <img
          src={add_icon_white}
          alt=""
          className="add"
          onClick={() => addToCart(food)}
        />
      </div>
      <div className="food-item-info">
        <p className="food-item-name">{food.name}</p>
        <p className="food-item-desc">{food.description}</p>
        <p className="food-item-price">{food.price} SEK</p>
      </div>
    </div>
  );
}

export default FoodItem;
