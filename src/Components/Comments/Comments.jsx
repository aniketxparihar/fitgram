import React from 'react'
import { useTheme } from '../../Context/Theme-Context';
import CommentCard from '../CommentCard/CommentCard';
import "./Comments.css"
const Comments = () => {
    const { themeObject } = useTheme();
  return (
    <div className="comments__container">
      <div className="comments__input">
        <img
          className="comments__input--display-picture h-14 w-14 rounded-full"
          src="https://images.unsplash.com/photo-1485528562718-2ae1c8419ae2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=858&q=80"
        />
        <input
          className="comments__input--input ml-4 mr-4 rounded-xl p-2 text-xl font-bold"
          type="text"
          style={{ backgroundColor: themeObject.secondary,color:themeObject.text }}
        />
        <button className="comments__input--post-comment h-14 w-32 rounded-3xl bg-violet-700 text-xl text-gray-50 font-bold">
          Post
        </button>
      </div>
      <CommentCard />
      <CommentCard />
      <CommentCard />
      <CommentCard />
      <CommentCard />
      <CommentCard />
      <CommentCard />
    </div>
  );
}

export default Comments