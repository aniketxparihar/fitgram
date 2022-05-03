import React,{useState,useEffect} from 'react';
import "./Sidebar.css";
import { Link } from 'react-router-dom'
import { useTheme } from '../../Context/Theme-Context';
const Sidebar = () => {
    const { themeObject, themeHandler, theme } = useTheme();
  return (
    <div className="sidebar__container flex flex-col  ">
      <Link
        to="/"
        className="sidebar__link text-left text-xl font-bold flex  rounded-3xl"
        style={{
          backgroundColor: themeObject.secondary,
          color: themeObject.text,
        }}
      >
        <span className="material-symbols-rounded mr-2 text-violet-500">
          home
        </span>
        <div className="sidebar__link--text">Home</div>
      </Link>
      <Link
        to="explore"
        className="sidebar__link text-left text-xl font-bold flex rounded-3xl"
        style={{
          backgroundColor: themeObject.secondary,
          color: themeObject.text,
        }}
      >
        <span className="material-symbols-rounded mr-2 text-violet-500">
          explore
        </span>
        <div className="sidebar__link--text">Explore</div>
      </Link>
      <Link
        to="bookmarks"
        className="sidebar__link text-left text-xl font-bold flex rounded-3xl"
        style={{
          backgroundColor: themeObject.secondary,
          color: themeObject.text,
        }}
      >
        <span className="material-symbols-rounded mr-2 text-violet-500">
          bookmark
        </span>
        <div className="sidebar__link--text">Bookmarks</div>
      </Link>
      <Link
        to="profile"
        className="sidebar__link text-left text-xl font-bold flex rounded-3xl"
        style={{
          backgroundColor: themeObject.secondary,
          color: themeObject.text,
        }}
      >
        <span className="material-symbols-rounded mr-2 text-violet-500">
          person
        </span>
        <div className="sidebar__link--text">Profile</div>
      </Link>
      <div
        className="sidebar__link text-left text-xl font-bold flex rounded-3xl cursor-pointer"
        style={{
          backgroundColor: themeObject.secondary,
          color: themeObject.text,
        }}
        onClick={() =>
          theme === "light" ? themeHandler("dark") : themeHandler("light")
        }
      >
        <span className="material-symbols-rounded text-violet-500">
          {theme === "light" ? "light_mode" : "dark_mode"}
        </span>
      </div>
    </div>
  );
}

export default Sidebar