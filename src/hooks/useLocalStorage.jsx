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
    const currentCart = getLocalStorage("cart") || [];
    let itemExists = false;

    const updatedCart = currentCart.map((c) => {
      if (c.id === foodToAdd.id) {
        c.quantity = c.quantity + 1;
        itemExists = true;
        return c;
      } else {
        return c;
      }
    });

    if (!itemExists) {
      updatedCart.push({ ...foodToAdd, quantity: 1 });
    }

    setLocalStorage("cart", updatedCart);
  }

  return { addToLocalStorageCart };
}

export default useLocalStorage;
