import React, { useState } from 'react';
import "./Profile.css"
import { useTheme } from '../../Context/Theme-Context';
import { Link, NavLink, Outlet } from 'react-router-dom';
import PostCard from '../../Components/PostCard/PostCard';
import { useModal } from '../../Context/Modal-Context';
const Profile = () => {
    const { themeObject } = useTheme();
  const { setEditProfileVisible } = useModal();
  const [userAccount, setUserAccount] = useState(false);
  const [following, setFollowing] = useState(true);
  return (
    <>
      <div
        className="profile__container mt-8 mb-8 rounded-3xl"
        style={{ backgroundColor: themeObject.secondary }}
      >
        <img
          src="https://images.unsplash.com/photo-1444090542259-0af8fa96557e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
          className="profile__cover__image rounded-t-3xl"
        />
        <img
          src="https://images.unsplash.com/photo-1485528562718-2ae1c8419ae2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=858&q=80"
          className="profile__display__picture h-40 w-40 rounded-full m-6"
        />
        {userAccount?null:<div
          style={{ color: themeObject.text }}
          className="edit-profile h-12 w-32 border border-gray-400 flex justify-center items-center rounded-3xl text-xl cursor-pointer"
          onClick={() => setEditProfileVisible("flex")}
        >
          Edit Profile
        </div>}
        {userAccount?<div
          style={following?{}:{color: themeObject.text }}
          className={`edit-profile h-12 w-32 border border-gray-400 flex justify-center items-center rounded-3xl text-xl cursor-pointer ${following?"bg-violet-700 text-gray-50 font-bold":null}`}
          onClick={() => {  setFollowing(!following)}}
        >
          {following?"Following":"Follow"}
        </div>:null}

        <div
          className="profile__name text-4xl ml-12"
          style={{ color: themeObject.text }}
        >
          John Doe
        </div>
        <div className="profile__username text-2xl text-gray-400 ml-12">
          @Johndoe
        </div>
        <div
          className="profile__bio  mt-8 ml-12 text-2xl"
          style={{ color: themeObject.text }}
        >
          Aspernatur id deleniti quo.✨ 🌙
        </div>
        <a
          href=""
          className="profile__username text-2xl text-purple-600 ml-12 font-bold"
        >
          Johndoe.com
        </a>
        <div className="profile__data flex justify-center ml-12 mt-8 mb-8">
          <Link
            to="/connections/followers"
            className="profile__followers   text-xl text-gray-500 font-bold flex"
          >
            <div className="followers--count text-violet-500 mr-2">200</div>
            Followers
          </Link>

          <Link
            to="/connections/following"
            className="profile__following  text-xl text-gray-500 font-bold flex ml-8"
          >
            <div className="following--count text-violet-500 mr-2">200</div>
            Following
          </Link>
          <div
            to="/connections/following"
            className="profile__posts  text-xl text-gray-500 font-bold flex ml-8"
          >
            <div className="post--count text-violet-500 mr-2">200</div>
            Posts
          </div>
        </div>
        <div className="user-data ml-8  rounded-b-3xl">
          <NavLink
            to="/profile/"
            className="posts text-2xl hover:bg-sky-500 cursor-pointer font-bold rounded-bl-3xl "
            style={({ isActive }) => ({
              backgroundColor: isActive ? "#8b5cf6" : "transparent",
              color: themeObject.text,
            })}
          >
            Posts
          </NavLink>
          <NavLink
            to="/profile/media"
            className="media text-2xl hover:bg-sky-500 cursor-pointer font-bold "
            style={({ isActive }) => ({
              backgroundColor: isActive ? "#8b5cf6" : "transparent",
              color: themeObject.text,
            })}
          >
            Media
          </NavLink>
          <NavLink
            to="/profile/liked"
            className="likes text-2xl hover:bg-sky-500 cursor-pointer font-bold rounded-br-3xl"
            style={({ isActive }) => ({
              backgroundColor: isActive ? "#8b5cf6" : "transparent",
              color: themeObject.text,
            })}
          >
            Liked
          </NavLink>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Profile