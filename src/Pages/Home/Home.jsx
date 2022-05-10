import React from 'react'
import Home_Profile from '../../Components/Home-Profile/Home_Profile';
import YouMightLike from '../../Components/Home-YouMightLike/YouMightLike';
import Search from '../../Components/Search/Search';
import Sidebar from '../../Components/Sidebar/Sidebar';
import { useTheme } from '../../Context/Theme-Context';
import { Outlet } from 'react-router-dom';
import "./Home.css";
import NewPostModal from '../../Components/NewPostModal/NewPostModal';
import EditProfileModal from '../../Components/EditProfileModal/EditProfileModal';
export const Home = () => {
  const { themeObject } = useTheme();
  return (
    <div
      className="home__container"
      style={{ backgroundColor: themeObject.primary }}
    >
      <div className="home__left ">
        <Sidebar />
      </div>
      <div className="home__center">
        <Outlet />
        <NewPostModal />
        <EditProfileModal/>
      </div>
      <div className="home__right">
        <Search />
        <Home_Profile />
        <YouMightLike />
      </div>
    </div>
  );
}
