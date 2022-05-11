import React from 'react'
import { useTheme } from '../../Context/Theme-Context';
const CommentCard = () => {
    const { themeObject } = useTheme();
  return (
    <div
      className="comments flex flex-col p-8  mt-8 mb-8 rounded-3xl"
      style={{ backgroundColor: themeObject.secondary }}
    >
      <div className="flex mb-2">
        <img
          className="comments--display-picture h-14 w-14 rounded-full mr-8"
          src="https://images.unsplash.com/photo-1485528562718-2ae1c8419ae2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=858&q=80"
        />
        <div className="flex flex-col justify-center">
          <div className="flex ">
            <div
              className="comments--commenter-name mr-2 font-bold text-xl"
              style={{ color: themeObject.text }}
            >
              Jack Doe
            </div>
            <div
              className="comments--commenter-username text-xl"
              style={{ color: themeObject.text }}
            >
              @jackdoe
            </div>
          </div>
          <div className="comments--post-owner-name text-violet-500 font-bold text-xl">
            Replying to @johndoe
          </div>
        </div>
      </div>
      <div
        className="comments--comment font-bold text-xl ml-20 p-2"
        style={{ color: themeObject.text }}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus
        dicta voluptates debitis tenetur sint eaque, eum aliquam laudantium
              voluptatum sequi.
              Lorem100
      </div>
    </div>
  );
}

export default CommentCard