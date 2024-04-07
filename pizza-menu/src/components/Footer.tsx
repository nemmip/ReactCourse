import React, { Fragment } from "react";

const Footer: React.FC = () => {
  return (
    <Fragment>
      <footer>{new Date().toLocaleTimeString()} We're currently open!</footer>
    </Fragment>
  );
};

export default Footer;
