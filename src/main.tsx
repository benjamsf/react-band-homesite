import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./i18n";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

/*
once auth things are done

import { Auth0Provider } from "@auth0/auth0-react";

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain={process.env.REACT_APP_AUTH0_DOMAIN || ""}
        clientId={process.env.REACT_APP_AUTH0_CLIENT_ID || ""}
        authorizationParams={{ redirect_uri: window.location.origin }}
        onRedirectCallback={(appState) => {
          window.history.replaceState(
            {},
            document.title,
            appState?.returnTo || window.location.pathname,
          );
        }}
      >
        <App />
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
*/
