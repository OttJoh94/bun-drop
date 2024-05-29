import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import LoginModal from "./components/LoginModal/LoginModal";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";

function App() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [showWelcomeBubble, setShowWelcomeBubble] = useState(false);

  return (
    <>
      {showLoginModal ? (
        <>
          <LoginModal
            setShowLoginModal={setShowLoginModal}
            setIsSignedIn={setIsSignedIn}
            setShowWelcomeBubble={setShowWelcomeBubble}
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
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
