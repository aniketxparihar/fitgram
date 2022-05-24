import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useTheme } from "../../Context/Theme-Context";
import "./SearchedUsers.css"
import { changecurrentid } from '../../redux/UserSlice';

const SearchedUsers = ({ users }) => {
  const { themeObject } = useTheme();
  const dispatch = useDispatch();
  return (
    <div
      className="searched-user__container rounded-3xl border"
      style={{
        backgroundColor: themeObject.secondary,
      }}
    >
      {users?.map((userdata) => {
        return (
          <div className="flex">
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
          </div>
        );
      })}
    </div>
  );
}

export default SearchedUsers