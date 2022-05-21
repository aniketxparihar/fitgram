import React,{useState} from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useTheme } from '../../Context/Theme-Context';
import { addToBookmark, deletePost, dislikePost, editPost, getAllPosts, getBookmarks, getComments, likePost, removeFromBookmark } from '../../services';
import "./PostCard.css"
const PostCard = ({post,postOptions}) => {
  const { themeObject } = useTheme();
  const [postOptionsVisible, setPostOptionsVisible] = useState(false);
  const [editVisible, setEditVisible] = useState(false);
  const { authToken } = useSelector((store) => store.auth)
  const { ownerData } = useSelector((store) => store.user);
  const [newPostContent, setNewPostContent] = useState(post?.content);
  const [newPostMedia, setNewPostMedia] = useState(post?.media);
  const { bookmarked } = useSelector((store) => store.post);
  const dispatch = useDispatch();

  const [comments, setComments] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await getComments(post?._id);
      setComments(res.data.comments);
   })()
 })
  return (
    <div
      className="post-card__container m-8 rounded-3xl relative"
      style={{ backgroundColor: themeObject.secondary }}
    >
      <div className="user-data__wrapper flex">
        <img
          className="display-picture h-28 w-28 rounded-3xl ml-8 mt-8"
          alt=""
          src={post?.profilePicture}
        />
        <div className="user-data flex flex-col text-gray-50 justify-center ml-8 text-xl">
          <div
            className="name text-left text-gray-200"
            style={{ color: themeObject.text }}
          >
            {post?.firstName} {post?.lastName}
          </div>
          <Link to={`/${post.username}`} onClick={()=>{}} className="username text-left text-gray-500 underline">
            {post?.username}
          </Link>
        </div>
        {postOptions ? (
          <span
            style={{ color: themeObject.text }}
            className="post-settings material-symbols-rounded   rounded-full m-8 cursor-pointer"
            onClick={() => setPostOptionsVisible(!postOptionsVisible)}
          >
            more_horiz
          </span>
        ) : null}
        {postOptionsVisible ? (
          <div className="post-settings__container  bg-violet-700 rounded-xl ">
            <div
              className="post-settings--edit font-bold text-gray-50 border-b rounded-t-xl hover:bg-violet-800 cursor-pointer"
              onClick={() => {
                setEditVisible(!editVisible);
                setPostOptionsVisible(!postOptionsVisible);
              }}
            >
              Edit post
            </div>
            <div
              className="post-settings--delete font-bold text-gray-50 rounded-b-xl hover:bg-violet-800 cursor-pointer"
              onClick={() => {
                deletePost(post._id, authToken);
                dispatch(getAllPosts());
                setPostOptionsVisible(!postOptionsVisible);
              }}
            >
              Delete post
            </div>
          </div>
        ) : null}
      </div>
      {editVisible ? null : (
        <div className="media__container ">
          <img className="media m-4 rounded-3xl " alt="" src={post?.media} />
        </div>
      )}
      {editVisible ? (
        <div className="edit-post-media rounded-3xl cursor-pointer relative m-8">
          <input type="file" className="image-input cursor-pointer" />
          <img
            src={post?.media}
            alt=""
            className="edit-post__image rounded-3xl"
          />
          <span className="edit-media text-gray-50 material-symbols-rounded  cursor-pointer  rounded-3xl bg-gray-800 p-4">
            perm_media
          </span>
        </div>
      ) : null}

      {editVisible ? null : (
        <div
          className="content mb-8 ml-8 mr-8 text-left text-xl"
          style={{ color: themeObject.text }}
        >
          {post?.content}
        </div>
      )}
      {editVisible ? (
        <textarea
          style={{
            backgroundColor: themeObject.secondary,
            color: themeObject.text,
          }}
          className="edit-content  mb-8 ml-8 mr-8 text-xl text-left border rounded-xl p-2"
          value={newPostContent}
          onChange={(e) => {
            setNewPostContent(e.target.value);
            dispatch(getAllPosts());
          }}
          placeholder={post?.content}
        />
      ) : null}
      {editVisible ? (
        <div
          className="h-14 w-32 bg-violet-700 text-gray-50 font-bold ml-8 rounded-3xl text-xl flex justify-center items-center cursor-pointer"
          onClick={() => {
            editPost(
              post._id,
              { content: newPostContent, media: newPostMedia },
              authToken
            );
            setNewPostContent("");
            dispatch(getAllPosts());
            setEditVisible(!editVisible);
          }}
        >
          Save
        </div>
      ) : null}
      <div className="post-options mb-8 flex justify-center items-center">
        <span
          tabIndex={"1"}
          onClick={() => {
            console.log("hellow there")
            post?.likes?.likedBy?.some(
              (likedBy) => ownerData?.username === likedBy.username
            )
              ? dislikePost(post._id, authToken)
              : likePost(post._id, authToken);
            dispatch(getAllPosts());
          }}
          className="like material-symbols-rounded ml-8 text-red-400  rounded-full"
        >
          favorite
        </span>
        <div
          style={{
            color: themeObject.text,
          }}
          className="text-xl"
        >
          {post?.likes?.likeCount}
        </div>

        <Link
          to={`/${post?.username}/${post?._id}`}
          className="comment material-symbols-rounded ml-8 text-gray-400  rounded-full "
        >
          comment
        </Link>
        <div
          style={{
            color: themeObject.text,
          }}
          className="text-xl"
        >
          {comments?.length}
        </div>
        <span className="share material-symbols-rounded ml-8 text-sky-400  rounded-full">
          send
        </span>
        <span
          className="bookmark material-symbols-rounded ml-auto mr-8 text-green-400  rounded-full"
          onClick={() => {
            console.log("hello")
            bookmarked?.some(
              (bookmarkedPost) => bookmarkedPost?._id === post?._id
            ) === true
              ? removeFromBookmark(post?._id, authToken)
              : addToBookmark(post?._id, authToken);
            dispatch(getBookmarks(authToken));
          }}
        >
          bookmark
        </span>
      </div>
    </div>
  );
}

export default PostCard