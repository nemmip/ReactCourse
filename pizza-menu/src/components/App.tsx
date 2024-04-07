import React, { Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Menu from "./Menu";

const App: React.FC = () => {
  return (
    <Fragment>
      <Header />
      <Menu />
      <Footer />
    </Fragment>
  );
};

export default App;
