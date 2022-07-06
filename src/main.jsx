import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "virtual:windi.css";
import UserContextStore from "./Context/UserContextStore";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextStore>
      <App />
    </UserContextStore>
  </React.StrictMode>
);
