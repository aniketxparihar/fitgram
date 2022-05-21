import React, { useState } from "react";
import { useTheme } from "../../../Context/Theme-Context";
import { useDispatch } from "react-redux";
import { signupHandler } from "../../../services";

const Signup = () => {
  const dispatch = useDispatch();
  const {themeObject} = useTheme();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [termsandcondition, setTermsandcondition] = useState(true);

  return (
    <div className="signup__container">
      <div
        className="form__container"
        style={{ backgroundColor: themeObject.primary }}
      >
        <header className="heading" style={{ color: themeObject.text }}>
          Signup to Fitgram
        </header>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(signupHandler(
              {username,
              password,
              firstName,
              lastName}
            ))
          }}
        >
          <div className="first_name">
            <label
              htmlFor="first_name__input"
              style={{ color: themeObject.text }}
            >
              First Name
            </label>
            <input
              type="text"
              id="first_name__input"
              className="first_name__input txt-2xl"
              value={firstName}
              onChange={(e) =>
                setFirstName(e.target.value)
              }
              style={{ color: themeObject.text }}
            />
          </div>
          <div className="last_name">
            <label
              htmlFor="last_name__input"
              style={{ color: themeObject.text }}
            >
              Last Name
            </label>
            <input
              type="text"
              id="last_name__input"
              className="last_name__input txt-2xl"
              value={lastName}
              onChange={(e) =>
                setLastName(e.target.value)
              }
              style={{ color: themeObject.text }}
            />
          </div>
          <div className="email">
            <label htmlFor="email__input" style={{ color: themeObject.text }}>
              Username
            </label>
            <input
              type="text"
              id="email__input"
              className="email__input txt-2xl "
              value={username}
              onChange={(e) =>
                setUsername(e.target.value)
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
              className="password__input txt-2xl"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              style={{ color: themeObject.text }}
            />
          </div>

          <div id="footer">
            <div id="termsAndCondition__container">
              <input
                type="checkbox"
                id="termsAndCondition"
                className="termsAndCondition"
                onChange={(e) =>
                  setTermsandcondition(!termsandcondition)
                }
                checked={termsandcondition}
                style={{ color: themeObject.text }}
              />
              <label
                htmlFor="termsAndCondition"
                style={{ color: themeObject.text }}
              >
                I Accept all Terms and Condition
              </label>
            </div>
          </div>
          <input
            className="signup__button"
            type="submit"
            value="Create New Account"
            disabled={
              termsandcondition === false ||
              firstName === "" ||
              lastName === "" ||
              password === "" ||
              username===""
            }
          />
        </form>
      </div>
    </div>
  );
};

export default Signup;
