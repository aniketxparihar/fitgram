import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router"
import {ThemeProvider} from "../src/Context/Theme-Context";
import {AuthProvider} from "../src/Context/Auth-Context";
import { ModalProvider } from "./Context/Modal-Context";
import store from "./redux/store";
import { Provider } from 'react-redux'

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider>
          <AuthProvider>
            <ModalProvider>
              <Router />
            </ModalProvider>
          </AuthProvider>
        </ThemeProvider>
      </Provider>
      
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
