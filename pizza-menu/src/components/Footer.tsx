import React, { Fragment } from "react";

const Footer: React.FC = () => {
  const hour = new Date().getHours();
  const openingHours = {
    open: 12,
    close: 22,
  };
  const isRestaurantOpen =
    hour >= openingHours.open && hour <= openingHours.close;

  return (
    <Fragment>
      <footer className="footer">
        {isRestaurantOpen && (
          <div className="order">
            <p>
              We're open until {openingHours.close}:00. Come visit us or order
              online.
            </p>
            <button className="btn">Order</button>
          </div>
        )}
      </footer>
    </Fragment>
  );
};

export default Footer;
