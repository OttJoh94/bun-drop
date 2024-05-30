import React, { useEffect, useState } from "react";
import "./Confirm.css";
import { Link, useParams } from "react-router-dom";
import drone from "../../assets/icons/drone.webp";
import CountdownTimer from "../../components/ContdownTimer/CountdownTimer";
import "../../fonts/Fonts.css";

function Confirm() {
  const { orderId } = useParams();
  const [order, setOrder] = useState({});

  useEffect(() => {
    if (orderId) {
      fetch(`http://localhost:3010/orders/${orderId}`)
        .then((res) => res.json())
        .then((data) => setOrder(data));
    }
  }, [orderId]);

  const droneBackground = {
    backgroundImage: `url(${drone})`,
  };

  return (
    <div className="confirm-wrapper" style={droneBackground}>
      <div className="confirm-contents">
        <h1>Dropdown expected</h1>
        <CountdownTimer />
      </div>
      <Link to="/" className="back-btn">
        Hem
      </Link>
    </div>
  );
}

export default Confirm;
