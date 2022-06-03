import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../../Context/Theme-Context";
import {useDispatch } from "react-redux";
import { loginHandler } from "../../../services";
const Login = () => {
  

  const dispatch = useDispatch();
  const { themeObject } = useTheme();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberme, setRememberme] = useState(false);
 

  const handleTestCredentials = () => {
    setUsername("test@1");
    setPassword("test");
    setRememberme(true);
  }
  return (
    <div className="login__container">
      <div
        className="form__container"
        style={{ backgroundColor: themeObject.primary }}
      >
        <header className="heading" style={{ color: themeObject.text }}>
          Login to Fitgram
        </header>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(loginHandler({ username, password, rememberme }));
          }}
        >
          <div className="email">
            <label htmlFor="email__input" style={{ color: themeObject.text }}>
              Username
            </label>
            <input
              type="email"
              id="email__input"
              className="email__input text-xl "
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ color: themeObject.text }}
            />
          </div>
          <div className="password">
            <label
              htmlFor="password__input"
              style={{ color: themeObject.text }}
            >
              Password
            </label>
            <input
              type="password"
              id="password__input"
              className="password__input text-xl"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ color: themeObject.text }}
            />
          </div>
          <div className="footer">
            <div className="rememberMe__container">
              <input
                type="checkbox"
                id="rememberMe"
                className="rememberMe"
                checked={rememberme}
                onChange={() => {
                  setRememberme(!rememberme);
                }}
              />
              <label htmlFor="rememberMe" style={{ color: themeObject.text }}>
                Remember Me
              </label>
            </div>
            {/* ToDo */}
            {/* <Link to="/forgotpassword" className="forgotPassword">
              Forgot Password
            </Link> */}
          </div>
          <input type="submit" className="login__button" value="Login" />
          <input type="submit" className="login__button" value="Login with Test Credentials" onClick={handleTestCredentials}/>
          <div className="noaccount" style={{ color: themeObject.text }}>
            Don't have an account?
            <Link to="/signup" className="text-2xl text-cyan-400">
              {" "}
              Signup
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
