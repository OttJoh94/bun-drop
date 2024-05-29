import React from "react";
import "./Cart.css";
import CartDisplay from "../../components/CartDisplay/CartDisplay";
import { Link } from "react-router-dom";

function Cart() {
  return (
    <div className="cart">
      <h2 className="cart-title">Din varukorg</h2>
      <CartDisplay fullDisplay={true} />
      <Link to="/checkout">
        <button className="go-to-checkout-btn"> Gå till betalning</button>
      </Link>
    </div>
  );
}

export default Cart;
