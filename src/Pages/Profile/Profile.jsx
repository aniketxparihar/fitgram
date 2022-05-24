import React, { useState, useEffect } from "react";
import "./Profile.css";
import { useTheme } from "../../Context/Theme-Context";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useModal } from "../../Context/Modal-Context";
import { useDispatch, useSelector } from "react-redux";
import EditProfileModal from "../../Components/EditProfileModal/EditProfileModal";
import { followUser, unfollowUser,getOwner, getUser } from "../../services";

const Profile = () => {
  const dispatch = useDispatch();
  const { userdata, ownerData,currentId } = useSelector((store) => store.user);
  const { user, authToken } = useSelector((store) => store.auth);
  const { themeObject } = useTheme();
  const { setModalEditProfileVisible } = useModal();

  return (
    <>
      <EditProfileModal userdata={userdata} />
      <div
        className="profile__container mt-8 mb-8 rounded-3xl"
        style={{ backgroundColor: themeObject.secondary }}
      >
        <img
          src={userdata?.coverPicture}
          alt=""
          className="profile__cover__image rounded-t-3xl"
        />
        <img
          alt=""
          src={userdata?.profilePicture}
          className="profile__display__picture h-40 w-40 rounded-full m-6"
        />

        {user?._id !== userdata?._id ? (
          <div
            style={
              ownerData?.following?.some(
                (followingUser) => followingUser?._id === userdata?._id
              )
                ? {}
                : { color: themeObject.text }
            }
            className={`edit-profile h-12 w-32 border border-gray-400 flex justify-center items-center rounded-3xl text-xl cursor-pointer ${
              ownerData?.following?.some(
                (followingUser) => followingUser?._id === userdata?._id
              )
                ? "bg-violet-700 text-gray-50 font-bold"
                : null
            }`}
            onClick={() => {
              ownerData?.following?.some(
                (followingUser) => followingUser?._id === userdata?._id
              )
                ? unfollowUser(userdata?._id, authToken)
                : followUser(userdata?._id, authToken);
              dispatch(getOwner(user._id));
            }}
          >
            {ownerData?.following?.some(
              (followingUser) => followingUser?._id === userdata?._id
            )
              ? "following"
              : "follow"}
          </div>
        ) : (
          <div
            style={{ color: themeObject.text }}
            className="edit-profile h-12 w-32 border border-gray-400 flex justify-center items-center rounded-3xl text-xl cursor-pointer"
            onClick={() => setModalEditProfileVisible("flex")}
          >
            Edit Profile
          </div>
        )}

        <div
          className="profile__name text-4xl ml-12"
          style={{ color: themeObject.text }}
        >
          {userdata?.firstName} {userdata?.lastName}
        </div>
        <div className="profile__username text-2xl text-gray-400 ml-12">
          {userdata?.username}
        </div>
        <div
          className="profile__bio  mt-8 ml-12 text-2xl"
          style={{ color: themeObject.text }}
        >
          {userdata?.bio}
        </div>
        <a
          href={userdata?.link}
          className="profile__username text-2xl text-purple-600 ml-12 font-bold underline"
        >
          {userdata?.link}
        </a>
        <div className="profile__data flex justify-center ml-12 mt-8 mb-8">
          <Link
            to="/connections/followers"
            className="profile__followers   text-xl text-gray-500 font-bold flex underline"
          >
            <div className="followers--count text-violet-500 mr-2">
              {userdata?.followers?.length}
            </div>
            Followers
          </Link>

          <Link
            to="/connections/following"
            className="profile__following  text-xl text-gray-500 font-bold flex ml-8 underline"
          >
            <div className="following--count text-violet-500 mr-2">
              {userdata?.following?.length}
            </div>
            Following
          </Link>
         
        </div>
        <div className="user-data ml-8  rounded-b-3xl">
          <NavLink
            to={`/profile/${userdata?.username}/`}
            className="posts text-2xl hover:bg-sky-500 cursor-pointer font-bold rounded-bl-3xl "
            style={({ isActive }) => ({
              backgroundColor: isActive ? "#8b5cf6" : "transparent",
              color: themeObject.text,
            })}
          >
            Posts
          </NavLink>
          <NavLink
            to={`media`}
            className="media text-2xl hover:bg-sky-500 cursor-pointer font-bold "
            style={({ isActive }) => ({
              backgroundColor: isActive ? "#8b5cf6" : "transparent",
              color: themeObject.text,
            })}
          >
            Media
          </NavLink>
          <NavLink
            to={`liked`}
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
};

export default Profile;
