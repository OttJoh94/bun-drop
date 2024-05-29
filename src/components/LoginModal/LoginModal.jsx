import React, { useEffect, useState } from "react";
import "./LoginModal.css";
import useInput from "../../hooks/useInput";
import useFetch from "../../hooks/useFetch";
import useLocalStorage from "../../hooks/useLocalStorage";

function LoginModal({
  setShowLoginModal,
  setIsSignedIn,
  setShowWelcomeBubble,
}) {
  const [registerOrLogin, setRegisterOrLogin] = useState("Login");
  const { data, loading, error } = useFetch("http://localhost:3010/users");
  const [allUsers, setAllUsers] = useState([]);
  const [isNoUser, setIsNoUser] = useState(false);
  const userNameInput = useInput(3);
  const emailInput = useInput(3);
  const passwordInput = useInput(3);
  const userStorage = useLocalStorage();

  useEffect(() => {
    setAllUsers(data);
  }, [data]);

  useEffect(() => {
    setIsNoUser(false);
  }, [registerOrLogin]);

  function handleSubmit(e) {
    e.preventDefault();

    const currentUser = createUser();
    if (registerOrLogin === "Login") {
      // Logga in användare
      const result = attemptLogin(currentUser);

      if (result.successfullLogin) {
        signInUser(result.userToSignIn);
      } else {
        // Visa error-meddelande
        setIsNoUser(true);
      }
    } else {
      // Registrera användare
      registerUser(currentUser);

      // Logga in användaren
      signInUser(currentUser);
    }
  }

  function registerUser(userToRegister) {
    const postOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userToRegister),
    };

    fetch("http://localhost:3010/users", postOptions);
  }

  function signInUser(userToSignIn) {
    // Sätt signedInUser i localStorage och App.jsx
    userStorage.setSignedInUser(userToSignIn);
    setIsSignedIn(true);

    // Visa välkommen
    setShowWelcomeBubble(true);
    // Ta bort modal
    setShowLoginModal(false);
  }

  function attemptLogin(attemptingUser) {
    let successfullLogin = false;
    let userToSignIn = {};
    allUsers.forEach((u) => {
      if (
        u.username.toLowerCase() === attemptingUser.username.toLowerCase() &&
        u.password === attemptingUser.password
      ) {
        successfullLogin = true;
        userToSignIn = u;
      }
    });

    return { successfullLogin, userToSignIn };
  }

  function createUser() {
    const newUser = {
      username: userNameInput.inputValue,
      email: emailInput.inputValue,
      password: passwordInput.inputValue,
    };

    return newUser;
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
              type="text"
              placeholder="Användarnamn"
              value={userNameInput.inputValue}
              onChange={userNameInput.handleInput}
              required
              className="login-input"
            />
            {registerOrLogin === "Login" ? (
              <></>
            ) : (
              <>
                <input
                  type="email"
                  placeholder="Email"
                  value={emailInput.inputValue}
                  onChange={emailInput.handleInput}
                  required
                  className="login-input"
                />
              </>
            )}
            <input
              type="password"
              placeholder="Lösenord"
              value={passwordInput.inputValue}
              onChange={passwordInput.handleInput}
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
            {isNoUser ? (
              <>
                <p className="error-message">Incorrect username or password</p>
              </>
            ) : (
              <></>
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
