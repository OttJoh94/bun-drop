import React, { useEffect, useState } from "react";
import "./Confirm.css";
import { useParams } from "react-router-dom";

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

  return <div>Confirm Order ID {order.id}</div>;
}

export default Confirm;
