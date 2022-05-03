import React from 'react'
import { useTheme } from '../../Context/Theme-Context'
import "./NewPost.css"
const NewPost = () => {
  const { themeObject } = useTheme();
  return (
    <div
      className="new-post__container rounded-3xl flex flex-col"
      style={{ backgroundColor: themeObject.secondary }}
    >
      <div className="new-post__wrapper flex p-8">
        <img
          className="display-picture h-16 w-16 rounded-full"
          alt=""
          src="https://images.unsplash.com/photo-1485528562718-2ae1c8419ae2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=858&q=80"
        />
        <textarea
          type="text"
          className="new-post__input bg-gray-600 rounded-3xl ml-8 text-xl text-gray-50"
          placeholder="What's Happening"
        />
      </div>
      <div className="new-post__options">
        <span className="material-symbols-rounded text-violet-500  border-2 border-violet-500 rounded-full mr-8">
          perm_media
        </span>

        <span className="material-symbols-rounded text-violet-500 border-2 border-violet-500 rounded-full mr-8">
          add_reaction
        </span>

        <span className="material-symbols-rounded text-violet-500 border-2 border-violet-500 rounded-full mr-8">
          gif_box
        </span>

        <span className="material-symbols-rounded text-violet-500 border-2 border-violet-500 rounded-full ">
          pin_drop
        </span>
        <div className="add-post w-32 text-xl font-bold  bg-gray-700 text-violet-500 rounded-2xl ">
          Post
        </div>
      </div>
    </div>
  );
}

export default NewPost