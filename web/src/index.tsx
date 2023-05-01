import React from "react";
import "./font.css";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import storeCreator from "./Store";
import { createGlobalStyle } from "styled-components";

import App from "./App";
export const AppRoot = createGlobalStyle`
  body {
    font-family: "Hiragino Maru Gothic Pro";
  }
  .ant-select-selector {
    width: 100%;
    height: 40px !important;
    border-radius: 12px !important;
    padding:4px 20px !important;
    font-size: 14px !important;
  }
`;

const store = storeCreator();

const container = document.getElementById("root");
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRoot />
      <App />
    </Provider>
  </React.StrictMode>
);
