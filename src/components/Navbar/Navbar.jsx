import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/icons/logo-color.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import useLocalStorage from "../../hooks/useLocalStorage";

function Navbar({
  setShowLoginModal,
  isSignedIn,
  setIsSignedIn,
  showWelcomeBubble,
  setShowWelcomeBubble,
}) {
  const [user, setUser] = useState({});
  const userStorage = useLocalStorage();

  useEffect(() => {
    setUser(userStorage.getSignedInUser());
    setTimeout(() => {
      setShowWelcomeBubble(false);
    }, 3000);
  }, [showWelcomeBubble]);

  return (
    <div className="navbar-background">
      <div className="navbar">
        <Link to="/">
          <img src={logo} alt="" className="navbar-logo" />
        </Link>
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <a href="#food-display">Meny</a>
          <a href="#">Om oss</a>
          <a href="#footer">Kontakt</a>
        </div>
        <div className="navbar-profiles">
          <Link to="/cart" className="click">
            <FontAwesomeIcon icon={faBasketShopping} className="fa-icon" />
          </Link>
          <Link>
            <FontAwesomeIcon icon={faUser} className="fa-icon" />
          </Link>
          {isSignedIn ? (
            <button
              className="sign-in-btn"
              onClick={() => setIsSignedIn(false)}
            >
              Logga ut
            </button>
          ) : (
            <>
              <button
                className="sign-in-btn"
                onClick={() => setShowLoginModal(true)}
              >
                Logga in
              </button>
            </>
          )}
        </div>
      </div>
      {showWelcomeBubble ? (
        <>
          <div className="welcome-bubble">
            <p>Välkommen, {user.username}!</p>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Navbar;
