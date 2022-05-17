import React from 'react'
import { useTheme } from '../../Context/Theme-Context';
import { Link } from 'react-router-dom';
import "./Home_Profile.css"
import { useSelector,useDispatch } from 'react-redux';
import { changecurrentid } from '../../redux/UserSlice';
const Home_Profile = () => {
  const { themeObject } = useTheme();
  const { ownerData, userdata } = useSelector((store) => store.user);
  const { user } = useSelector((store) => store.auth);
  
  const dispatch = useDispatch();
  return (
    <div
      className="home__profile__container  m-8 rounded-3xl flex flex-col justify-center items-center"
      style={{ backgroundColor: themeObject.secondary }}
    >
      <img
        src={ownerData?.coverPicture}
        alt=""
        className="home__profile__cover__image"
      />
      <img src={ownerData?.profilePicture} className="home__profile__display__picture h-32 w-32 bg-gray-200 rounded-full m-8" />
      <div
        className="home__profile__name text-2xl text-gray-200"
        style={{ color: themeObject.text }}
      >
        {ownerData?.firstName} {ownerData?.lastName}
      </div>
      <div
        className="home__profile__username text-l text-gray-400"
        style={{ color: themeObject.text }}
      >
        {ownerData?.username}
      </div>
      <div
        className="home__profile__bio  mt-8  text-l"
        style={{ color: themeObject.text }}
      >
        {ownerData?.bio}
      </div>

      <div className="home__profile__data flex justify-center ">
        <div className="home__profile__followers  p-2  m-2 text-xl text-gray-500 font-bold border-r  border-gray-400 ">
          <div className="followers--count text-violet-500">{ownerData?.followers?.length}</div>
          Followers
        </div>
        <div className="home__profile__following  p-2  m-2 text-xl text-gray-500 font-bold ">
          <div className="following--count text-violet-500">{ownerData?.following?.length}</div>
          Following
        </div>
      </div>
      <Link to={`/${user?.username}`} onClick={()=>{dispatch(changecurrentid(user?._id))}} className="text-violet-600 mb-8 text-xl font-bold">
        My Profile
      </Link>
    </div>
  );
}

export default Home_Profile