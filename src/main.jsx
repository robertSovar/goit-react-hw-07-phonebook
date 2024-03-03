import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { Provider as ReduxProvider } from "react-redux";
import "./index.css";
import { store } from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>
);
