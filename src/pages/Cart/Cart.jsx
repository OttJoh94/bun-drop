import React, { useState } from "react";
import "./Cart.css";
import CartDisplay from "../../components/CartDisplay/CartDisplay";
import { Link } from "react-router-dom";

function Cart({ cartIsEmpty, setCartIsEmpty, cart, setCart }) {
  return (
    <div className="cart">
      <h2 className="cart-title">Din varukorg</h2>
      <CartDisplay
        fullDisplay={true}
        setCartIsEmpty={setCartIsEmpty}
        cart={cart}
        setCart={setCart}
      />
      {cartIsEmpty ? (
        <>
          <button className="disabled-btn"> Gå till betalning</button>
        </>
      ) : (
        <>
          <Link to="/checkout">
            <button className="go-to-checkout-btn"> Gå till betalning</button>
          </Link>
        </>
      )}
    </div>
  );
}

export default Cart;
