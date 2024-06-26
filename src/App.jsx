import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import LoginModal from "./components/LoginModal/LoginModal";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import useLocalStorage from "./hooks/useLocalStorage";
import Confirm from "./pages/Confirm/Confirm";

function App() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showWelcomeBubble, setShowWelcomeBubble] = useState(false);
  const [cartIsEmpty, setCartIsEmpty] = useState(true);
  const [cart, setCart] = useState([]);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [signedInUser, setSignedInUser] = useState({});
  const storage = useLocalStorage();

  // Endast för att navbaren ska ha sin orangea prick vid cart från början om det finns sparat sen tidigare session
  useEffect(() => {
    const initialCart = storage.getCart();
    if (initialCart.length > 0) {
      setCartIsEmpty(false);
    }
  }, []);

  useEffect(() => {
    setSignedInUser(storage.getSignedInUser());
  }, []);

  useEffect(() => {
    setIsSignedIn(Object.keys(storage.getSignedInUser()).length > 0);
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      setCartIsEmpty(false);
    }
  }, [cart]);

  return (
    <>
      {showLoginModal ? (
        <>
          <LoginModal
            setShowLoginModal={setShowLoginModal}
            setIsSignedIn={setIsSignedIn}
            setShowWelcomeBubble={setShowWelcomeBubble}
            setSignedInUser={setSignedInUser}
          />
        </>
      ) : (
        <></>
      )}
      <div className="app">
        <Navbar
          setShowLoginModal={setShowLoginModal}
          isSignedIn={isSignedIn}
          setIsSignedIn={setIsSignedIn}
          showWelcomeBubble={showWelcomeBubble}
          setShowWelcomeBubble={setShowWelcomeBubble}
          cartIsEmpty={cartIsEmpty}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                cartIsEmpty={cartIsEmpty}
                setCartIsEmpty={setCartIsEmpty}
                cart={cart}
                setCart={setCart}
                isSignedIn={isSignedIn}
                signedInUser={signedInUser}
                setSignedInUser={setSignedInUser}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                cartIsEmpty={cartIsEmpty}
                setCartIsEmpty={setCartIsEmpty}
                cart={cart}
                setCart={setCart}
              />
            }
          />
          <Route
            path="/checkout"
            element={
              <Checkout
                setCartIsEmpty={setCartIsEmpty}
                cart={cart}
                setCart={setCart}
              />
            }
          />
          <Route path="/confirm/:orderId" element={<Confirm />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
