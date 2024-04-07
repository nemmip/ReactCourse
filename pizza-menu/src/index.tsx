import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import "./index.css";

// Root rendering in React v18
const rootNode = document.getElementById("root")!; // adding ! assures TS that's not null assertion
const root = createRoot(rootNode);
root.render(
  // strict mode re render components twice in order to find bugs and / or outdated react components
  <StrictMode>
    <App />
  </StrictMode>,
);
