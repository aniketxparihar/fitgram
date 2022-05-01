import React, { useReducer, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../Context/Auth-Context";
import { useTheme } from "../../../Context/Theme-Context";

const Login = () => {
  const { loginHandler } = useAuth();
  const { themeObject } = useTheme();
  const loginReducerFunc = (state, action) => {
    switch (action.type) {
      case "USERNAME":
        return { ...state, email: action.payload };
      case "PASSWORD":
        return { ...state, password: action.payload };
      case "REMEMBER_ME":
        return { ...state, rememberMe: !state.rememberMe };
    }
  };

  const [state, dispatch] = useReducer(loginReducerFunc, {
    username: "test@1",
    password: "test",
    rememberMe: true,
  });
  return (
    <div className="login__container">
      <div
        className="form__container"
        style={{ backgroundColor: themeObject.primary }}
      >
        <header className="heading" style={{ color: themeObject.text }}>
          Login to Fitme
        </header>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            loginHandler(state);
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
              value={state.username}
              onChange={(e) =>
                dispatch({ type: "USERNAME", payload: e.target.value })
              }
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
              value={state.password}
              onChange={(e) =>
                dispatch({ type: "PASSWORD", payload: e.target.value })
              }
              style={{ color: themeObject.text }}
            />
          </div>
          <div className="footer">
            <div className="rememberMe__container">
              <input
                type="checkbox"
                id="rememberMe"
                className="rememberMe"
                checked={state.rememberMe}
                onChange={() => {
                  dispatch({ type: "REMEMBER_ME" });
                }}
              />
              <label
                htmlFor="rememberMe"
                style={{ color: themeObject.text }}
                
              >
                Remember Me
              </label>
            </div>

            <Link to="/forgotpassword" className="forgotPassword">
              Forgot Password
            </Link>
          </div>
          <input type="submit" className="login__button" value="Login" />
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
