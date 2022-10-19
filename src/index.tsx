import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import PhoneContextProvider from "./contexts/phone/PhoneContextProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <PhoneContextProvider>
      <App />
    </PhoneContextProvider>
  </React.StrictMode>
);

reportWebVitals();
