import React,{useState,useEffect} from 'react';
import "./Sidebar.css";
import { Link } from 'react-router-dom'
import { useTheme } from '../../Context/Theme-Context';
import { useModal } from '../../Context/Modal-Context';
import { logout } from '../../redux/AuthSlice';
import { useDispatch,useSelector } from 'react-redux';
import { changecurrentid } from '../../redux/UserSlice';
const Sidebar = () => {
  const { user } = useSelector((store) => store.auth)
  const dispatch = useDispatch();
  const {  setModalNewPostVisible } = useModal();
  const { themeObject, themeHandler, theme } = useTheme();
  return (
    <div className="sidebar__container flex flex-col  ">
      <Link
        to="/"
        className="sidebar__link text-left text-xl font-bold flex  rounded-3xl"
        style={{
          color: themeObject.text,
        }}
      >
        <span className="material-symbols-rounded mr-4 ">home</span>
        <div className="sidebar__link--text">Home</div>
      </Link>
      <Link
        to="explore"
        className="sidebar__link text-left text-xl font-bold flex rounded-3xl"
        style={{
          color: themeObject.text,
        }}
      >
        <span className="material-symbols-rounded mr-4 ">explore</span>
        <div className="sidebar__link--text">Explore</div>
      </Link>
      <Link
        to="bookmarks"
        className="sidebar__link text-left text-xl font-bold flex rounded-3xl"
        style={{
          color: themeObject.text,
        }}
      >
        <span className="material-symbols-rounded mr-4 ">bookmark</span>
        <div className="sidebar__link--text">Bookmarks</div>
      </Link>
      <Link
        to="archived"
        className="sidebar__link text-left text-xl font-bold flex rounded-3xl"
        style={{
          color: themeObject.text,
        }}
      >
        <span className="material-symbols-rounded mr-4 ">archive</span>
        <div className="sidebar__link--text">Archived</div>
      </Link>
      <Link
        to="drafts"
        className="sidebar__link text-left text-xl font-bold flex rounded-3xl"
        style={{
          color: themeObject.text,
        }}
      >
        <span className="material-symbols-rounded mr-4 ">drafts</span>
        <div className="sidebar__link--text">Drafts</div>
      </Link>
      <Link
        to={`${user.username}/`}
        onClick={() => {
          dispatch(changecurrentid(user._id))
        }}
        className="sidebar__link text-left text-xl font-bold flex rounded-3xl"
        style={{
          color: themeObject.text,
        }}
      >
        <span className="material-symbols-rounded mr-4 ">person</span>
        <div className="sidebar__link--text">Profile</div>
      </Link>

      <div
        className="sidebar__link text-left text-xl text-gray-50 font-bold flex rounded-3xl bg-violet-600 cursor-pointer w-52 h-14"
        onClick={() => setModalNewPostVisible("flex")}
      >
        <div className="sidebar__link--text">New post</div>
      </div>

      <div
        className="sidebar__link theme-toggle text-left text-xl font-bold flex rounded-3xl cursor-pointer"
        style={{
          backgroundColor: themeObject.secondary,
          color: themeObject.text,
        }}
        onClick={() =>
          theme === "light" ? themeHandler("dark") : themeHandler("light")
        }
      >
        <span className="material-symbols-rounded ">
          {theme === "light" ? "dark_mode" : "light_mode"}
        </span>
      </div>
      <div
        className="sidebar__link  text-left text-xl font-bold flex rounded-3xl cursor-pointer"
        style={{
          backgroundColor: themeObject.secondary,
          color: themeObject.text,
        }}
        onClick={() => dispatch(logout())}
      >
        <span className="material-symbols-rounded ">logout</span>
      </div>
    </div>
  );
}

export default Sidebar