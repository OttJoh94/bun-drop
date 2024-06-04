import React from "react";
import "./FavoritesList.css";
import FavoritesItem from "../FavoritesItem/FavoritesItem";
import useLocalStorage from "../../hooks/useLocalStorage";

function FavoritesList({
  cart,
  setCart,
  isSignedIn,
  signedInUser,
  setSignedInUser,
}) {
  const useStorage = useLocalStorage();

  function handleAddToCart(foodToAdd) {
    useStorage.addToLocalStorageCart(foodToAdd);
    setCart(useStorage.getCart());
  }

  function handleRemoveFromCart(foodToRemove) {
    useStorage.removeFromLocalStorage(foodToRemove);
    setCart(useStorage.getCart());
  }

  return (
    <div className="favorites-wrapper" id="favorites">
      <hr className="favorites-hr" />
      <h1 className="favorites-title">Dina favoriter</h1>

      {signedInUser.favorites.length > 0 ? (
        <>
          <div className="favorites-list">
            {signedInUser.favorites.map((f) => (
              <FavoritesItem
                key={f.id}
                food={f}
                addToCart={handleAddToCart}
                removeFromCart={handleRemoveFromCart}
              />
            ))}
          </div>
        </>
      ) : (
        <>
          <h3 className="favorites-empty">
            Lägg till i dina favoriter för att se här
          </h3>
        </>
      )}

      <hr className="favorites-hr" />
    </div>
  );
}

export default FavoritesList;
