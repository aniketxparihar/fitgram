import React from 'react'
import { useTheme } from '../../Context/Theme-Context';
import { Link } from 'react-router-dom';
import "./Home_Profile.css"
const Home_Profile = () => {
    const { themeObject } = useTheme();
  return (
    <div
      className="home__profile__container  m-8 rounded-3xl flex flex-col justify-center items-center"
      style={{ backgroundColor: themeObject.secondary }}
    >
      <img
        src="https://images.unsplash.com/photo-1444090542259-0af8fa96557e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt=""
        className="home__profile__cover__image"
      />
      <img
        src="https://images.unsplash.com/photo-1485528562718-2ae1c8419ae2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=858&q=80"
        className="home__profile__display__picture h-32 w-32 bg-gray-200 rounded-full m-8"
      />
      <div
        className="home__profile__name text-3xl text-gray-200"
        style={{ color: themeObject.text }}
      >
        John Doe
      </div>
      <div
        className="home__profile__username text-xl text-gray-400"
        style={{ color: themeObject.text }}
      >
        John@doe
      </div>
      <div
        className="home__profile__bio  mt-8  text-l"
        style={{ color: themeObject.text }}
      >
        Aspernatur id deleniti quo.✨ 🌙
      </div>

      <div className="home__profile__data flex justify-center border-t border-b  border-gray-400 ">
        <div className="home__profile__followers  p-2  m-2 text-xl text-gray-500 font-bold border-r  border-gray-400 ">
          <div className="followers--count text-violet-500">200</div>
          Followers
        </div>
        <div className="home__profile__following  p-2  m-2 text-xl text-gray-500 font-bold ">
          <div className="following--count text-violet-500">200</div>
          Following
        </div>
      </div>
      <Link to="/profile" className="text-violet-600 mb-8 text-xl font-bold">
        My Profile
      </Link>
    </div>
  );
}

export default Home_Profile