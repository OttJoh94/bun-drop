import React from "react";
import "./Checkout.css";
import CartDisplay from "../../components/CartDisplay/CartDisplay";
import useInput from "../../hooks/useInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import swish1 from "../../assets/icons/swish-1.svg";
import swish2 from "../../assets/icons/swish-2.svg";

function Checkout({ setCartIsEmpty, cart, setCart }) {
  const firstName = useInput(1);
  const lastName = useInput(1);
  const address = useInput(1);
  const zipCode = useInput(1);
  const City = useInput(1);
  const email = useInput(1);
  const phone = useInput(1);

  function handleSubmit() {}
  return (
    <div className="checkout">
      <div className="billing-payment">
        <h2>Leveransadress</h2>
        <form onSubmit={handleSubmit} className="billing-inputs">
          <div className="double-row">
            <input
              type="text"
              placeholder="Förnamn"
              value={firstName.inputValue}
              onChange={firstName.handleInput}
              required
              className="billing-input"
            />
            <input
              type="text"
              placeholder="Efternamn"
              value={lastName.inputValue}
              onChange={lastName.handleInput}
              required
              className="billing-input"
            />
          </div>
          <input
            type="text"
            placeholder="Adress"
            value={address.inputValue}
            onChange={address.handleInput}
            required
            className="billing-input"
          />

          <div className="double-row">
            <input
              type="text"
              placeholder="Postkod"
              value={zipCode.inputValue}
              onChange={zipCode.handleInput}
              required
              className="billing-input"
            />
            <input
              type="text"
              placeholder="Postort"
              value={City.inputValue}
              onChange={City.handleInput}
              required
              className="billing-input"
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            value={email.inputValue}
            onChange={email.handleInput}
            required
            className="billing-input"
          />
          <input
            type="text"
            placeholder="Telefonnummer"
            value={phone.inputValue}
            onChange={phone.handleInput}
            required
            className="billing-input"
          />
        </form>
        <h2>Betalsätt</h2>
        <div className="payment-method">
          <div className="pay-with-btn">
            <FontAwesomeIcon icon={faCreditCard} />
            <h3>Kort</h3>
          </div>
          <div className="pay-with-btn">
            <img src={swish2} alt="" />
          </div>
        </div>
      </div>
      <div className="seperator"></div>
      <div className="checkout-cart">
        <h2>Din varukorg</h2>
        <CartDisplay
          fullDisplay={false}
          setCartIsEmpty={setCartIsEmpty}
          cart={cart}
          setCart={setCart}
        />
      </div>
    </div>
  );
}

export default Checkout;
