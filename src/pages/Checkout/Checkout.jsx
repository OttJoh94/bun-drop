import React, { useEffect, useState } from "react";
import "./Checkout.css";
import CartDisplay from "../../components/CartDisplay/CartDisplay";
import useInput from "../../hooks/useInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import swish1 from "../../assets/icons/swish-1.svg";
import swish2 from "../../assets/icons/swish-2.svg";
import { useNavigate } from "react-router-dom";

function Checkout({ setCartIsEmpty, cart, setCart }) {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [order, setOrder] = useState(null);
  const firstName = useInput(1);
  const lastName = useInput(1);
  const address = useInput(1);
  const zipCode = useInput(1);
  const city = useInput(1);
  const email = useInput(1);
  const phone = useInput(1);
  const fullName = useInput(1);
  const date = useInput(1);
  const cardNumber = useInput(1);
  const cvc = useInput(1);
  const navigate = useNavigate();

  useEffect(() => {
    if (firstName.inputValue === "" && lastName.inputValue === "") {
      fullName.setInputValue("");
    } else {
      fullName.setInputValue(`${firstName.inputValue} ${lastName.inputValue}`);
    }
  }, [firstName.inputValue, lastName.inputValue]);

  useEffect(() => {
    if (order) {
      navigate(`/confirm/${order.id}`);
    }
  }, [order]);

  function handleSubmit(e) {
    e.preventDefault();

    postNewOrder();
  }

  function postNewOrder() {
    const billingInfo = {
      firstName: firstName.inputValue,
      lastName: lastName.inputValue,
      address: address.inputValue,
      zipCode: zipCode.inputValue,
      city: city.inputValue,
      email: email.inputValue,
      phone: phone.inputValue,
    };

    const newOrder = {
      billingInfo: billingInfo,
      order: cart,
    };

    const postOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newOrder),
    };

    fetch("http://localhost:3010/orders", postOptions)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }

  return (
    <div className="checkout">
      <div className="billing-payment">
        <h2>Leveransadress</h2>
        <form
          onSubmit={handleSubmit}
          id="checkoutForm"
          className="billing-inputs"
        >
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
              pattern="\d{5}"
              title="Ange 5 siffror."
              className="billing-input"
            />
            <input
              type="text"
              placeholder="Postort"
              value={city.inputValue}
              onChange={city.handleInput}
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
          <div
            className={`pay-with-btn ${
              paymentMethod === "card" ? "active" : ""
            }`}
            onClick={() => setPaymentMethod("card")}
          >
            <FontAwesomeIcon icon={faCreditCard} />
            <h3>Kort</h3>
          </div>
          <div
            className={`pay-with-btn ${
              paymentMethod === "swish" ? "active" : ""
            }`}
            onClick={() => setPaymentMethod("swish")}
          >
            <img src={swish2} alt="" />
          </div>
        </div>
        {paymentMethod === "card" && (
          <>
            <div className="card-inputs">
              <div className="card-first-row">
                <input
                  type="text"
                  placeholder="Namn"
                  value={fullName.inputValue}
                  onChange={fullName.handleInput}
                  required
                  className="billing-input"
                  form="checkoutForm"
                />
                <input
                  type="text"
                  placeholder="Datum MM/YY"
                  value={date.inputValue}
                  onChange={date.handleInput}
                  required
                  pattern="^(0[1-9]|1[0-2])\/?([0-9]{2})$"
                  title="Ange MM/YY."
                  className="billing-input"
                  form="checkoutForm"
                />
              </div>
              <div className="card-second-row">
                <input
                  type="text"
                  placeholder="Kortnummer"
                  value={cardNumber.inputValue}
                  onChange={cardNumber.handleInput}
                  required
                  pattern="\d{16}"
                  title="Ange 16 siffror."
                  className="billing-input"
                  form="checkoutForm"
                />
                <input
                  type="text"
                  placeholder="CVC"
                  value={cvc.inputValue}
                  onChange={cvc.handleInput}
                  required
                  pattern="\d{3}"
                  title="Ange 3 siffror."
                  className="billing-input"
                  form="checkoutForm"
                />
              </div>
              <button className="pay-btn" form="checkoutForm">
                Betala
              </button>
            </div>
          </>
        )}
        {paymentMethod === "swish" && (
          <>
            <div className="open-swish">
              <img src={swish1} alt="" className="swish-logo" />
              <button className="open-swish-btn" form="checkoutForm">
                Öppna swish
              </button>
            </div>
          </>
        )}
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
