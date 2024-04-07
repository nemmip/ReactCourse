import React, { Fragment } from "react";
import Order from "./Order";
import OrderProps from "../types/OrderProps";

const Footer: React.FC = () => {
  const hour = new Date().getHours();
  const openingHours: OrderProps = {
    open: 12,
    close: 22,
  };
  const isRestaurantOpen =
    hour >= openingHours.open && hour <= openingHours.close;

  return (
    <Fragment>
      <footer className="footer">
        {isRestaurantOpen ? (
          <Order {...openingHours} />
        ) : (
          <p>
            We're happy to welcome you between {openingHours.open}:00 and{" "}
            {openingHours.close}:00.
          </p>
        )}
      </footer>
    </Fragment>
  );
};

export default Footer;
