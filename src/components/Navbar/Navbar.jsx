import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/icons/logo-color.png";
import logoMobile from "../../assets/icons/logo-color-mobile.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import useLocalStorage from "../../hooks/useLocalStorage";
import useWindowSize from "../../hooks/useWindowSize";
import usePathname from "../../hooks/usePathname";

function Navbar({
  setShowLoginModal,
  isSignedIn,
  setIsSignedIn,
  showWelcomeBubble,
  setShowWelcomeBubble,
  cartIsEmpty,
}) {
  const [user, setUser] = useState({});
  const userStorage = useLocalStorage();
  const windowSize = useWindowSize();
  const pathName = usePathname();

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
          {windowSize.size < 750 ? (
            <>
              <img src={logoMobile} alt="" className="navbar-logo" />
            </>
          ) : (
            <>
              <img src={logo} alt="" className="navbar-logo" />
            </>
          )}
        </Link>
        <div className="navbar-links">
          {pathName.path === "/" ? (
            <>
              <a href="#welcome">Home</a>
            </>
          ) : (
            <>
              <Link to="/">Home</Link>
            </>
          )}
          <a href="#food-display">Meny</a>
          <a href="#">Om oss</a>
          <a href="#footer">Kontakt</a>
        </div>
        <div className="navbar-profiles">
          <Link to="/cart" className="cart-image">
            <FontAwesomeIcon icon={faBasketShopping} className="fa-icon" />
            {!cartIsEmpty ? (
              <>
                <div className="orange-dot"></div>
              </>
            ) : (
              <></>
            )}
          </Link>
          {/* <Link>
            <FontAwesomeIcon icon={faUser} className="fa-icon" />
          </Link> */}
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
