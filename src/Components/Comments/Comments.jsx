import React from 'react'
import { useEffect,useState } from 'react';
import { useSelector } from 'react-redux';

import { useTheme } from '../../Context/Theme-Context';
import { addComment, getComments } from '../../services';
import CommentCard from '../CommentCard/CommentCard';
import "./Comments.css"

const Comments = ({post}) => {
  const { themeObject } = useTheme();
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([]);
  const { authToken } = useSelector((store) => store.auth);
  const { ownerData } = useSelector((store) => store.user);
  useEffect(() => {
    (async () => {
      const res = await getComments(post?._id);
      setComments(res.data.comments);
    })()
  }, [])
  return (
    <div className="comments__container">
      <div className="comments__input mb-8">
        <img
          alt=""
          src={ownerData?.profilePicture}
          className="comments__input--display-picture h-14 w-14 rounded-full"
        />
        <input
          className="comments__input--input ml-4 mr-4  rounded-xl p-2 text-xl font-bold"
          type="text"
          style={{
            backgroundColor: themeObject.secondary,
            color: themeObject.text,
          }}
          placeholder="Type here..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button
          className="comments__input--post-comment h-14 w-32 rounded-3xl bg-violet-700 text-xl text-gray-50 font-bold"
          onClick={async () => {
            if(newComment?.length>0){
            addComment(post?._id, authToken, {content:newComment,profilePicture:ownerData.profilePicture,username:post.username});
            setNewComment("");
            const res = await getComments(post?._id);
              setComments(res?.data?.comments);
            }
            else {
              return;
            }
          }}
        >
          Post
        </button>
      </div>
      {comments?.map((comment) => {
        return <CommentCard comment={comment} />;
      })}
    </div>
  );
}

export default Comments