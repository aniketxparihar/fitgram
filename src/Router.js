import React from 'react'
import { Link, Routes as RoutesContainer,Route } from "react-router-dom";
import App from './App';
import Signup from "./Pages/Auth/Signup/Signup";
import Login from "./Pages/Auth/Login/Login";
import AuthRoute from "./Components/AuthRoute/AuthRoute";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import LandingPage from './Pages/LandingPage/LandingPage';
import ForgotPassword from './Pages/Auth/FotgotPassword/ForgotPassword';
import { Home } from './Pages/Home/Home';
const Router = () => {
  return (
      <RoutesContainer>
          <Route path="/" element={<App />}>
              <Route path="/landing" element={<LandingPage />} />
              <Route element={<PrivateRoute />}>
                  <Route index path="/" element={<Home/>}/>
              </Route>
              <Route element={<AuthRoute />}>
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/forgotpassword" element={<ForgotPassword />} />
              </Route>
          </Route>
      </RoutesContainer>
  )
}

export default Router