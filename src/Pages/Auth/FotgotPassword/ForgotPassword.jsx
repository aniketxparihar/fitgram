import React from "react";
import { useTheme } from "../../../Context/Theme-Context";
const ForgotPassword = () => {
  const { themeObject } = useTheme();
  return (
    <div className="forgotpassword__container">
      <div
        className="form__container"
        style={{ backgroundColor: themeObject.primary }}
      >
        <heading className="heading" style={{ color: themeObject.text }}>
          Forgot Password
        </heading>
        <form>
          <div className="email">
            <label htmlFor="email__input" style={{ color: themeObject.text }}>
              Email Address
            </label>
            <input
              type="email"
              id="email__input"
              className="email__input text-xl "
              style={{ color: themeObject.text }}
            />
          </div>
          <button className="send__password__button">Send My Password</button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
