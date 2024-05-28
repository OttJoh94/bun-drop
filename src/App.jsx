import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import LoginModal from "./components/LoginModal/LoginModal";

function App() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <>
      {showLoginModal ? (
        <>
          <LoginModal
            setShowLoginModal={setShowLoginModal}
            setIsSignedIn={setIsSignedIn}
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
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route />
          <Route />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
