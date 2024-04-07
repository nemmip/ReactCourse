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
        {new Date().toLocaleTimeString()} We're currently open!
      </footer>
    </Fragment>
  );
};

export default Footer;
