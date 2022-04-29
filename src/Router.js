import React from 'react'
import { Link, Routes as RoutesContainer,Route } from "react-router-dom";
import App from './App';
import Signup from "./Pages/Auth/Signup/Signup";
import Login from "./Pages/Auth/Login/Login";
import AuthRoute from "./Components/AuthRoute/AuthRoute";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

const Router = () => {
  return (
      <RoutesContainer>
          <Route path="/" element={<App />}>
              <Route element={<PrivateRoute />}>
              </Route>
              <Route element={<AuthRoute />}>
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
              </Route>
          </Route>
      </RoutesContainer>
  )
}

export default Router