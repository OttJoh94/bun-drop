import React from "react";
import "./Navbar.css";
import logo from "../../assets/icons/logo-color.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping, faUser } from "@fortawesome/free-solid-svg-icons";

function Navbar({ setShowLoginModal, isSignedIn, setIsSignedIn }) {
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
    </div>
  );
}

export default Navbar;
