import React from 'react'
import { useTheme } from '../../Context/Theme-Context';
import "./ConnectUserCard.css"
const ConnectUserCard = () => {
    const { themeObject } = useTheme();
  return (
    <div className="connect-user-card__container m-4">
        <img
          src="https://images.unsplash.com/photo-1485528562718-2ae1c8419ae2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=858&q=80"
          alt=""
          className="h-16 w-16 rounded-full"
        />
        <div className="connect-user-card__profile__data ml-8 mr-8">
          <div
            className="connect-user-card__profile__data--name  text-2xl text-left"
            style={{ color: themeObject.text }}
          >
            John Doe
          </div>
          <div className="connect-user-card__profile__data--username text-gray-400 text-xl text-left">
            @john@doe
          </div>
        </div>
        <div className="follow h-14 w-32 text-xl bg-gray-200 hover:bg-violet-500 cursor-pointer font-bold flex justify-center items-center rounded-full">
          Follow
        </div>
    </div>
  );
}

export default ConnectUserCard