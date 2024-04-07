import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Menu from "./Menu";

const App: React.FC = () => {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
};

export default App;
