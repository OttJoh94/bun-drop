import React, { useState } from "react";
import "./FavoritesItem.css";
import add_icon_white from "../../assets/icons/add_icon_white.png";
import remove_icon_red from "../../assets/icons/remove_icon_red.png";
import add_icon_green from "../../assets/icons/add_icon_green.png";
import useLocalStorage from "../../hooks/useLocalStorage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fasStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as fatStar } from "@fortawesome/free-regular-svg-icons";

function FavoritesItem({
  food,
  addToCart,
  removeFromCart,
  userFavorite,
  signedInUser,
  setSignedInUser,
}) {
  const cartStorage = useLocalStorage();
  const [quantity, setQuantity] = useState(cartStorage.getQuantityToFood(food));

  function handleAdd() {
    addToCart(food);
    setQuantity(quantity + 1);
  }

  function handleRemove() {
    removeFromCart(food);
    setQuantity(quantity - 1);
  }
  return (
    <div className="favorite-item">
      <div className="favorite-item-img-container">
        <img className="favorite-item-image" src={food.image} alt="" />

        {quantity <= 0 ? (
          <>
            <img
              src={add_icon_white}
              alt=""
              className="add"
              onClick={handleAdd}
            />
          </>
        ) : (
          <>
            <div className="favorite-item-counter">
              <img onClick={handleRemove} src={remove_icon_red} alt="" />
              <p>{quantity}</p>
              <img onClick={handleAdd} src={add_icon_green} alt="" />
            </div>
          </>
        )}
      </div>
      <div className="favorite-item-info">
        <p className="favorite-item-name">{food.name}</p>
        <p className="favorite-item-price">{food.price} SEK</p>
      </div>
    </div>
  );
}

export default FavoritesItem;
