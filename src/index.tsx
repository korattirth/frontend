import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import CustomRouter from "./app/layout/CustomRouter";
import { createBrowserHistory } from "history";
import ScrollToTop from "./app/layout/ScrollToTop";
import { store, StoreContext } from "./app/store/store";

export const history = createBrowserHistory();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <StoreContext.Provider value={store}>
    <CustomRouter history={history}>
      <ScrollToTop />
      <App />
    </CustomRouter>
  </StoreContext.Provider>
);
