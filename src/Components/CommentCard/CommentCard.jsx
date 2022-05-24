import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '../../Context/Theme-Context';

import "./CommentCard.css"
import { deleteComment, downvoteComment, editComment, getComments, upvoteComment } from '../../services';
import { useState } from 'react';

const CommentCard = ({comment}) => {
  const { themeObject } = useTheme();
  const { authToken } = useSelector((store) => store.auth);
  
  const dispatch = useDispatch();
  return (
    <div
      className="comments flex flex-col p-8  mt-8 mb-8 rounded-3xl"
      style={{ backgroundColor: themeObject.secondary }}
    >
      <div className="flex mb-2">
        <img
          alt=""
          className="comments--display-picture h-14 w-14 rounded-full mr-8"
          src={comment?.profilePicture}
        />
        <div className="flex flex-col">
          <div className="flex justify-start">
            <div
              className="comments--commenter-name mr-2 font-bold text-xl"
              style={{ color: themeObject.text }}
            >
              {comment?.firstName} {comment?.lastName}
            </div>
            <div
              className="comments--commenter-username text-xl "
              style={{ color: themeObject.text }}
            >
              @{comment?.username}
            </div>
          </div>
          <div className="comments--post-owner-name text-violet-500 font-bold text-xl text-left">
            Replying to @{comment?.postUsername}
          </div>
        </div>
      </div>
      <div
        className="comments--comment font-bold text-xl ml-20 p-2"
        style={{ color: themeObject.text }}
      >
        {comment?.content}
      </div>
      <div className=" comment-actions flex m-8  items-center ">
    
        <span
          className="material-symbols-rounded ml-auto mr-8"
          onClick={() => {
            deleteComment(comment?.postId, comment?._id, authToken);
            dispatch(getComments(comment?.postId));
          }}
          style={{ color: themeObject.text }}
        >
          delete
        </span>
      </div>
    </div>
  );
}

export default CommentCard