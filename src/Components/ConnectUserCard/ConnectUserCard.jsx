import React from 'react'
import { Link } from 'react-router-dom';
import { useTheme } from '../../Context/Theme-Context';
import { changecurrentid } from "../../redux/UserSlice";
import {  useDispatch,useSelector } from 'react-redux';
import "./ConnectUserCard.css"
import { followUser,unfollowUser } from '../../services';
import { getOwner,getUser } from '../../services/userService';
const ConnectUserCard = ({userdata}) => {
  const { themeObject } = useTheme();
  const dispatch = useDispatch();
  const { authToken,user } = useSelector((store) => store.auth);
  const { ownerData } = useSelector((store) => store.user);
  return (
    <div className="connect-user-card__container m-4">
      <Link
        to={`/profile/${userdata?.username}/`}
        onClick={() => dispatch(changecurrentid(userdata?._id))}
        className="flex justify-center items-center "
      >
        <img
          src={userdata?.profilePicture}
          alt=""
          className="h-16 w-16 rounded-full"
        />
      </Link>

      <div className="connect-user-card__profile__data ml-8 ">
        <div
          className="connect-user-card__profile__data--name  text-2xl text-left"
          style={{ color: themeObject.text }}
        >
          {userdata?.firstName} {userdata?.lastName}
        </div>
        <Link
          to={`/profile/${userdata?.username}/`}
          onClick={() => dispatch(changecurrentid(userdata?._id))}
          className="connect-user-card__profile__data--username text-gray-400 text-xl  flex justify-start underline"
          replace={true}
        >
          {userdata?.username}
        </Link>
      </div>
      <div
        className="follow h-14 w-32 text-xl bg-gray-200 hover:bg-violet-500 cursor-pointer font-bold flex justify-center items-center rounded-full ml-auto"
        onClick={() => {
          ownerData?.following?.some(
            (followingUser) => followingUser?._id === userdata?._id
          )
            ? unfollowUser(userdata?._id, authToken)
            : followUser(userdata?._id, authToken);
          dispatch(getOwner(user?._id));
          dispatch(getUser(user?._id));
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

export default ConnectUserCard