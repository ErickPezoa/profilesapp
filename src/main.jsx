import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Authenticator, useAuthenticator} from "@aws-amplify/ui-react";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <Authenticator>
		<App />
	  </Authenticator>
  </React.StrictMode>
);