import React from 'react'
import { Link } from 'react-router-dom';
import "./NotFound.css"
const NotFound = () => {
  return (
    <div className="notfound-container flex-col  ">
      <img className="notfound-image" src="https://i.imgur.com/lKJiT77.png" alt="" />
      <div className="text-5xl mt-8">OOPS! A dog ate this page</div>
      <Link
        to="/"
        className="text-2xl text-violet-600 flex justify-center items-center mt-8"
      >
        <span className="material-symbols-rounded">arrow_back</span>
        Go back to Home
      </Link>
    </div>
  );
}

export default NotFound