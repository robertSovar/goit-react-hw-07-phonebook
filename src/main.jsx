import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { Provider as ReduxProvider } from "react-redux";
import "./index.css";
import { store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ReduxProvider store={store}>
    <PersistGate loading={null} persistor={persistStore(store)}>
      <App />
    </PersistGate>
  </ReduxProvider>
);
