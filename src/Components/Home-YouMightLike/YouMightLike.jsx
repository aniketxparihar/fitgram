import React from 'react'
import { Link } from 'react-router-dom';
import { useTheme } from '../../Context/Theme-Context';
import "./YouMightLike.css";

const YouMightLike = () => {
    const { themeObject } = useTheme();
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
      <div className="who-to-follow__profile flex justify-center align-center mb-4">
        <img
          src="https://images.unsplash.com/photo-1485528562718-2ae1c8419ae2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=858&q=80"
          alt=""
          className="h-12 w-12 rounded-full"
        />
        <div className="who-to-follow__profile__data ml-8 mr-8">
          <div
            className="who-to-follow__profile__data--name  text-l text-left"
            style={{ color: themeObject.text }}
          >
            John Doe
          </div>
          <div className="who-to-follow__profile__data--username text-gray-400 text-m text-left">
            @john@doe
          </div>
        </div>
        <div className="follow h-12 w-24 bg-gray-200 hover:bg-violet-500 cursor-pointer font-bold flex justify-center items-center rounded-full">
          Follow
        </div>
      </div>

      <div className="who-to-follow__profile flex justify-center align-center mb-4">
        <img
          src="https://images.unsplash.com/photo-1485528562718-2ae1c8419ae2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=858&q=80"
          alt=""
          className="h-12 w-12 rounded-full"
        />
        <div className="who-to-follow__profile__data ml-8 mr-8">
          <div
            className="who-to-follow__profile__data--name  text-l text-left"
            style={{ color: themeObject.text }}
          >
            John Doe
          </div>
          <div className="who-to-follow__profile__data--username text-gray-400 text-m text-left">
            @john@doe
          </div>
        </div>
        <div className="follow h-12 w-24 bg-gray-200 hover:bg-violet-500 cursor-pointer font-bold flex justify-center items-center rounded-full">
          Follow
        </div>
      </div>
      

      <Link to="/connect-people" className="show-more text-violet-500 text-xl text mb-4 cursor-pointer font-bold">
        Show More
      </Link>
    </div>
  );
}

export default YouMightLike