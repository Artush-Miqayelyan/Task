import React, { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider } from "react-redux";
import { store } from "entities/store";
import App from "app/App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <GoogleOAuthProvider clientId="656739436073-gh10bsep10ejulod19lfqm14tcn6b25n.apps.googleusercontent.com">
        <StrictMode>
          <App />
        </StrictMode>
      </GoogleOAuthProvider>
    </BrowserRouter>
  </Provider>
);