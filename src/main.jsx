import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store";          // <-- तुझा Redux store
import ReduxStore from "./ReduxStore"; // <-- तुझा component

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ReduxStore />
    </Provider>
  </React.StrictMode>
);
