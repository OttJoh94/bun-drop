import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import LoginModal from "./components/LoginModal/LoginModal";

function App() {
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <>
      {showLoginModal ? (
        <>
          <LoginModal setShowLoginModal={setShowLoginModal} />
        </>
      ) : (
        <></>
      )}
      <div className="app">
        <Navbar setShowLoginModal={setShowLoginModal} />
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
