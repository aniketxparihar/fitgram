import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { changecurrentid } from "../../redux/UserSlice";
import { Link } from 'react-router-dom';
import { useTheme } from '../../Context/Theme-Context';
import "./YouMightLike.css";
import { followUser, unfollowUser } from '../../services';
import { getOwner,getUser } from '../../services/userService';

const YouMightLike = () => {
  const { themeObject } = useTheme();
  const dispatch = useDispatch();
  const { authToken, user } = useSelector((store) => store.auth);
  const { allusers,ownerData } = useSelector((store) => store.user);
  return (
    <div
      className="who-to-follow__container m-8 rounded-3xl"
      style={{ backgroundColor: themeObject.secondary }}
    >
      <div
        className="who-to-follow__heading m-8 text-2xl"
        style={{ color: themeObject.text }}
      >
        Suggested for you
      </div>

      {
        allusers?.filter((userdata)=>userdata?._id!==ownerData?._id&&ownerData?.following?.some((followingUser)=>followingUser?._id===userdata?._id)===false).map((userdata) => {
          if(userdata?.id<5){
          return (
            <div
              className="who-to-follow__profile flex justify-center align-center mb-4"
              key={userdata.id}
            >
              <img
                src={userdata?.profilePicture}
                alt=""
                className="h-12 w-12 rounded-full"
              />
              <div className="who-to-follow__profile__data ml-8 mr-8">
                <div
                  className="who-to-follow__profile__data--name  text-l text-left"
                  style={{ color: themeObject.text }}
                >
                  {userdata?.firstName}
                </div>
                <Link
                  to={`/${userdata?.username}/`}
                  onClick={() => {
                    dispatch(changecurrentid(userdata?._id));
                  }}
                  className="who-to-follow__profile__data--username text-gray-400 text-m text-left underline"
                >
                  @{userdata?.username}
                </Link>
              </div>
              <div
                
                className={`follow h-12 w-24 bg-gray-200 hover:bg-violet-500 cursor-pointer font-bold flex justify-center items-center rounded-full ${ownerData?.following?.some((followingUser) => followingUser?._id === userdata?._id) ? "bg-violet-700 text-gray-50 font-bold" : null}`}
                onClick={() => {
                  ownerData?.following?.some(
                    (followingUser) => followingUser?._id === userdata?._id
                  )
                    ? unfollowUser(userdata?._id, authToken)
                    : followUser(userdata?._id, authToken);
                  dispatch(getOwner(user._id));
                  dispatch(getUser(user._id));
                }}
              >
                {ownerData?.following?.some(
                  (followingUser) => followingUser?._id === userdata?._id
                )
                  ? "following"
                  : "follow"}
              </div>
            </div>
          );
          }
          return;
        })
      }
      
      

      <Link to="/connect-people" className="show-more text-violet-500 text-xl text mb-4 cursor-pointer font-bold">
        Show More
      </Link>
    </div>
  );
}

export default YouMightLike