import React, { useEffect, useState } from "react";
import "./CartDisplay.css";
import { Link } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";

function CartDisplay({ fullDisplay }) {
  const cartStorage = useLocalStorage();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(cartStorage.getCart());
  }, []);

  function addToCart(food) {
    cartStorage.addToLocalStorageCart(food);
    setCart(cartStorage.getCart());
  }

  function removeFromCart(food) {
    cartStorage.removeFromLocalStorage(food);
    setCart(cartStorage.getCart());
  }

  function deleteFromCart(food) {
    cartStorage.deleteCompletelyFromLocalStorage(food);
    setCart(cartStorage.getCart());
  }

  return (
    <>
      {fullDisplay ? (
        <>
          <div className="cart-display">
            <div className="title-row">
              <p className="title-row-text">Produkt</p>
              <p className="title-row-text">Pris</p>
              <p className="title-row-text">Antal</p>
              <p className="title-row-text">Total</p>
              <p className="title-row-text cart-item-remove">Ta bort</p>
            </div>
            <hr />
            {cart.map((c) => (
              <div className="title-row cart-item" key={c.id}>
                <div className="product-display">
                  <div className="product-image">
                    <img src={c.image} alt="" />
                  </div>
                  <p className="cart-item-text">{c.name}</p>
                </div>

                <p className="cart-item-text">{c.price} SEK</p>
                <p className="cart-item-text">
                  <span className="minus" onClick={() => removeFromCart(c)}>
                    -
                  </span>{" "}
                  {c.quantity}{" "}
                  <span className="plus" onClick={() => addToCart(c)}>
                    +
                  </span>
                </p>
                <p className="cart-item-text">{c.price * c.quantity} SEK</p>
                <p
                  className="cart-item-text cart-item-remove"
                  onClick={() => deleteFromCart(c)}
                >
                  X
                </p>
              </div>
            ))}

            <hr />
            <div className="total-price-container">
              <div className="total-text">
                <p>Summa totalt</p>
                <p className="total-sek">
                  {cartStorage.getTotalCartPrice()} SEK
                </p>
              </div>
              <div className="total-text">
                <p>Inkl. moms 12%</p>
                <p className="total-sek">
                  {(cartStorage.getTotalCartPrice() * 0.12).toFixed(2)} SEK
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="cart-display">
            <div className="title-row-small">
              <p className="title-row-text">Produkt</p>
              <p className="title-row-text">Pris</p>
              <p className="title-row-text">Antal</p>
              <p className="title-row-text">Total</p>
            </div>
            <hr />
            {cart.map((c) => (
              <div className="title-row-small cart-item-small" key={c.id}>
                <div className="product-display">
                  <p className="cart-item-text">{c.name}</p>
                </div>

                <p className="cart-item-text">{c.price} SEK</p>
                <p className="cart-item-text">{c.quantity}</p>
                <p className="cart-item-text">{c.price * c.quantity} SEK</p>
              </div>
            ))}

            <hr />
            <div className="total-price-container">
              <div className="total-text">
                <p>Summa totalt</p>
                <p className="total-sek">
                  {cartStorage.getTotalCartPrice()} SEK
                </p>
              </div>
              <div className="total-text">
                <p>Inkl. moms 12%</p>
                <p className="total-sek">
                  {(cartStorage.getTotalCartPrice() * 0.12).toFixed(2)} SEK
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default CartDisplay;
