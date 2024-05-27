import React, { useState } from "react";
import "./LoginModal.css";

function LoginModal({ setShowLoginModal }) {
  const [registerOrLogin, setRegisterOrLogin] = useState("Login");

  function handleSubmit(e) {
    e.preventDefault();
  }

  function hideModal(e) {
    if (e.target.className === "modal") {
      setShowLoginModal(false);
    }
  }

  return (
    <div className="login">
      <div className="modal" onClick={hideModal}>
        <div className="modal-contents">
          <h2 className="login-title">
            {registerOrLogin === "Login"
              ? "Logga in"
              : "Registrera ny användare"}
          </h2>
          <form onSubmit={handleSubmit} className="login-inputs">
            <input
              type="email"
              placeholder="Email"
              required
              className="login-input"
            />
            <input
              type="password"
              placeholder="Password"
              required
              className="login-input"
            />
            {registerOrLogin === "Login" ? (
              <></>
            ) : (
              <>
                <div className="register-checkbox">
                  <input type="checkbox" required />
                  <p>
                    Jag godkänner{" "}
                    <span className="checkbox-span">terms and conditions</span>
                  </p>
                </div>
              </>
            )}
            <button type="submit" className="login-modal-btn">
              {registerOrLogin === "Login" ? "Logga in" : "Registrera"}
            </button>
          </form>
          {registerOrLogin === "Login" ? (
            <>
              <p>
                Saknar du ett konto?{" "}
                <span
                  className="toggle-span"
                  onClick={() => setRegisterOrLogin("Register")}
                >
                  Registrera här
                </span>
              </p>
            </>
          ) : (
            <>
              <p>
                Har du redan ett konto?{" "}
                <span
                  className="toggle-span"
                  onClick={() => setRegisterOrLogin("Login")}
                >
                  Logga in här
                </span>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
