import React from 'react'
import { useTheme } from '../../Context/Theme-Context';
import "./PostCard.css"
const PostCard = () => {
    const { themeObject } = useTheme();
  return (
    <div
      className="post-card__container m-8 rounded-3xl"
      style={{ backgroundColor: themeObject.secondary }}
    >
      <div className="user-data__wrapper flex">
        <img
          className="display-picture h-28 w-28 rounded-3xl ml-8 mt-8"
          alt=""
          src="https://images.unsplash.com/photo-1485528562718-2ae1c8419ae2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=858&q=80"
        />
        <div className="user-data flex flex-col text-gray-50 justify-center ml-8 text-xl">
          <div
            className="name text-left text-gray-200"
            style={{ color: themeObject.text }}
          >
            John Doe
          </div>
          <div className="username text-left text-gray-500">john@doewwd</div>
        </div>
      </div>
      <div className="media__container p-8">
        <img
          className="media m-4 rounded-3xl "
          alt=""
          src="https://images.unsplash.com/photo-1579126038374-6064e9370f0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1131&q=80"
        />
      </div>
      <div className="post-options mb-8">
        <span className="material-symbols-rounded ml-8 text-red-400  rounded-full">
          favorite
        </span>
        <span className="material-symbols-rounded ml-8 text-gray-400  rounded-full">
          comment
        </span>
        <span className="material-symbols-rounded ml-8 text-sky-400  rounded-full">
          send
        </span>
        <span className="material-symbols-rounded ml-auto mr-8 text-green-400 border-2 border-green-400 rounded-full">
          bookmark
        </span>
      </div>
    </div>
  );
}

export default PostCard