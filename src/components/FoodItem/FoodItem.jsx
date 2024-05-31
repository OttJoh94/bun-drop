import React, { useState } from "react";
import "./FoodItem.css";
import add_icon_white from "../../assets/icons/add_icon_white.png";
import remove_icon_red from "../../assets/icons/remove_icon_red.png";
import add_icon_green from "../../assets/icons/add_icon_green.png";
import useLocalStorage from "../../hooks/useLocalStorage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fasStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as fatStar } from "@fortawesome/free-regular-svg-icons";

function FoodItem({
  food,
  addToCart,
  removeFromCart,
  userFavorite,
  signedInUser,
  setSignedInUser,
}) {
  const cartStorage = useLocalStorage();
  const [quantity, setQuantity] = useState(cartStorage.getQuantityToFood(food));
  const [fillStar, setFillStar] = useState(false);
  const [isFavorite, setIsFavorite] = useState(userFavorite);

  function handleAdd() {
    addToCart(food);
    setQuantity(quantity + 1);
  }

  function handleRemove() {
    removeFromCart(food);
    setQuantity(quantity - 1);
  }

  function handleSetFavorite() {
    setIsFavorite((prev) => !prev);

    if (isFavorite) {
      // Ta bort från favorites

      const updatedUser = { ...signedInUser };
      updatedUser.favorites = signedInUser.favorites.filter(
        (f) => f.id !== food.id
      );

      setSignedInUser(updatedUser);
    } else {
      // Lägg till i favorites

      const updatedUser = { ...signedInUser };
      updatedUser.favorites.push(food);

      setSignedInUser(updatedUser);
    }
  }

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={food.image} alt="" />
        <div
          className="star-div"
          onMouseOver={() => setFillStar(true)}
          onMouseOut={() => setFillStar(false)}
          onClick={handleSetFavorite}
        >
          {fillStar || isFavorite ? (
            <>
              <FontAwesomeIcon
                icon={fasStar}
                size="xl"
                className="star-icon solid"
              />
            </>
          ) : (
            <>
              <FontAwesomeIcon
                icon={fatStar}
                size="xl"
                className="star-icon thin"
              />
            </>
          )}
        </div>

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
            <div className="food-item-counter">
              <img onClick={handleRemove} src={remove_icon_red} alt="" />
              <p>{quantity}</p>
              <img onClick={handleAdd} src={add_icon_green} alt="" />
            </div>
          </>
        )}
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
