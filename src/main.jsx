import { insertCoin } from "playroomkit";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

insertCoin({
  skipLobby: true,
  gameId: "1SPNHYCQ2WbICju6zhSv",
  discord: true,
}).then(() =>
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
);
