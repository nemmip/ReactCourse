import React from "react";
import Logo from "./components/Logo.tsx";
import Form from "./components/Form.tsx";
import PackingList from "./components/PackingList.tsx";
import Stats from "./components/Stats.tsx";

const App: React.FC = () => {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
};

export default App;
