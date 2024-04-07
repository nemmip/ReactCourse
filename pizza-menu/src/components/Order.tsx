import React from "react";
import OrderProps from "../types/OrderProps";

const Order: React.FC<OrderProps> = ({ open, close }) => {
  return (
    <div className="order">
      <p>
        We're open from {open}:00 until {close}:00. Come visit us or order
        online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
};

export default Order;
