import React from 'react'
import Home_Profile from '../../Components/Home-Profile/Home_Profile';
import YouMightLike from '../../Components/Home-YouMightLike/YouMightLike';
import NewPost from '../../Components/NewPost/NewPost';
import PostCard from '../../Components/PostCard/PostCard';
import Search from '../../Components/Search/Search';
import Sidebar from '../../Components/Sidebar/Sidebar';
import { useTheme } from '../../Context/Theme-Context';
import "./Home.css";
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
        <NewPost />
        <PostCard />
        <PostCard />

        <PostCard />
      </div>
      <div className="home__right">
        <Search />
        <Home_Profile />
        <YouMightLike />
      </div>
    </div>
  );
}
