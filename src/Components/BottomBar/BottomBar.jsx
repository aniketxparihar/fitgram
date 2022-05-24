import React from 'react'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useTheme } from "../../Context/Theme-Context";
import { useModal } from "../../Context/Modal-Context";
import { logout } from "../../redux/AuthSlice";
import { changecurrentid } from "../../redux/UserSlice";
import "./BottomBar.css";

const BottomBar = () => {
          const {user} = useSelector((store) => store.auth);
          const dispatch =useDispatch();
          const {setModalNewPostVisible} = useModal();
          const {themeObject, themeHandler, theme} = useTheme();
          return (
            <div
              className="bottombar__container flex bg-violet-700 "
              style={{ backgroundColor: themeObject.secondary }}
            >
              <Link
                to="explore"
                className="bottombar__link text-left text-xl font-bold flex rounded-3xl"
                style={{
                  color: themeObject.text,
                }}
              >
                <span className="material-symbols-rounded mr-4 ">explore</span>
                <div className="bottombar__link--text"></div>
              </Link>
              <Link
                to="bookmarks"
                className="bottombar__link text-left text-xl font-bold flex rounded-3xl"
                style={{
                  color: themeObject.text,
                }}
              >
                <span className="material-symbols-rounded mr-4 ">bookmark</span>
                <div className="bottombar__link--text"></div>
              </Link>
            
              <Link
                to={`/profile/${user.username}/`}
                onClick={() => {
                  dispatch(changecurrentid(user._id));
                }}
                className="bottombar__link text-left text-xl font-bold flex rounded-3xl "
                style={{
                  color: themeObject.text,
                }}
              >
                <span className="material-symbols-rounded mr-4 ">person</span>
                <div className="bottombar__link--text"></div>
              </Link>
              <Link
                to="/"
                className="bottombar__link text-left text-5xl font-bold flex  rounded-3xl "
                style={{
                  color: themeObject.text,
                }}
              >
                <span className="material-symbols-rounded mr-4 ">home</span>
                <div className="bottombar__link--text"></div>
              </Link>

              <div
                className="bottombar__link new-post text-left text-xl text-gray-50 font-bold flex rounded-full justify-center items-center bg-violet-600 cursor-pointer w-24 h-24"
                onClick={() => setModalNewPostVisible("flex")}
              >
                <span className="material-symbols-rounded text-5xl ">draw</span>
              </div>

              <Link
                to={"/connect-people"}
                className="bottombar__link text-left text-xl font-bold flex rounded-3xl"
                style={{
                  color: themeObject.text,
                }}
              >
                <span className="material-symbols-rounded mr-4 ">group</span>
                <div className="bottombar__link--text"></div>
              </Link>

              <div
                className="bottombar__link  text-left text-xl font-bold flex rounded-3xl cursor-pointer"
                style={{
                  color: themeObject.text,
                }}
                onClick={() =>
                  theme === "light"
                    ? themeHandler("dark")
                    : themeHandler("light")
                }
              >
                <span className="material-symbols-rounded ">
                  {theme === "light" ? "dark_mode" : "light_mode"}
                </span>
              </div>
              <div
                className="bottombar__link  text-left text-xl font-bold flex rounded-3xl cursor-pointer"
                style={{
                  color: themeObject.text,
                }}
                onClick={() => dispatch(logout())}
              >
                <span className="material-symbols-rounded ">logout</span>
              </div>
            </div>
          );
}

export default BottomBar