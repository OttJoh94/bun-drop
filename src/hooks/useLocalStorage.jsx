import React, { useState } from "react";

function useLocalStorage() {
  function getLocalStorage(key) {
    const item = localStorage.getItem(key);
    const parsedItem = JSON.parse(item);
    return parsedItem;
  }

  function setLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function addToLocalStorageCart(foodToAdd) {
    //Hittar nuvarande listan
    const currentCart = getLocalStorage("cart") || [];
    let itemExists = false;

    const updatedCart = currentCart.map((c) => {
      // Om den redan finns, addera 1
      if (c.id === foodToAdd.id) {
        c.quantity = c.quantity + 1;
        itemExists = true;
        return c;
      } else {
        // Ingen match, returnera objektet som det är
        return c;
      }
    });

    // Om den inte finns, lägg till i listan tillsammans med en quantity.
    if (!itemExists) {
      updatedCart.push({ ...foodToAdd, quantity: 1 });
    }

    setLocalStorage("cart", updatedCart);
  }

  function removeFromLocalStorage(foodToRemove) {
    const currentCart = getLocalStorage("cart") || [];

    const updatedCart = currentCart
      .map((c) => {
        if (c.id === foodToRemove.id) {
          c.quantity = c.quantity - 1;
          return c;
        } else {
          return c;
        }
      })
      .filter((c) => c.quantity > 0); // Rensar bort de med quantity 0

    setLocalStorage("cart", updatedCart);
  }

  function getQuantityToFood(food) {
    const currentCart = getLocalStorage("cart") || [];

    const item = currentCart.find((c) => c.id === food.id);
    return item ? item.quantity : 0;
  }

  function setSignedInUser(userToSignIn) {
    setLocalStorage("user", userToSignIn);
  }

  function getSignedInUser() {
    return getLocalStorage("user");
  }

  return {
    addToLocalStorageCart,
    removeFromLocalStorage,
    getQuantityToFood,
    setSignedInUser,
    getSignedInUser,
  };
}

export default useLocalStorage;
