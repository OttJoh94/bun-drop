import React from "react";
import "./Checkout.css";
import CartDisplay from "../../components/CartDisplay/CartDisplay";

function Checkout() {
  return (
    <div className="checkout">
      <div className="billing-payment">
        <p>Här kör vi lite placeholdertext</p>
      </div>
      <div className="checkout-cart">
        <h2>Din varukorg</h2>
        <CartDisplay fullDisplay={false} />
      </div>
    </div>
  );
}

export default Checkout;
