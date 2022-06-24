import React,{useState} from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import {  toast } from "react-toastify";
import { useTheme } from '../../Context/Theme-Context';
import { changecurrentid } from '../../redux/UserSlice';
import { addToBookmark, deletePost, dislikePost, editPost, getAllPosts, getBookmarks, getComments, getUser, likePost, removeFromBookmark } from '../../services';
import { getPagedPosts } from '../../services/postService';
import "./PostCard.css"
const PostCard = ({ post, postOptions }) => {
  
  const { themeObject } = useTheme();

  const [postOptionsVisible, setPostOptionsVisible] = useState(false);
  const [editVisible, setEditVisible] = useState(false);
  const [newPostContent, setNewPostContent] = useState(post?.content);
  const [newPostMedia, setNewPostMedia] = useState(post?.media);
  const {  pageNum } = useSelector(
    (store) => store.post
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
   const { authToken } = useSelector((store) => store.auth);
   const { currentId,ownerData } = useSelector((store) => store.user);
  const { bookmarked, comments } = useSelector((store) => store.post);

  const notify = (text, type) => {
    switch (type) {
      case "success":
        toast.success(text);
        return;
      case "failed":
        toast.failed(text);
        return;
      default: return;
    }
  }
  useEffect(() => {
    setNewPostContent(post?.content)
  },[post])
  const handleOnPostMediaChange = async (e) => {
    const imageFile = e.target.files[0];
    if (Math.floor(imageFile / 1000000) > 3) {
      console.log("Image file size should be less than 3MB", "error");
      return;
    }
    const url = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`;
    const formData = new FormData();
    formData.append("file", imageFile);
    formData.append("upload_preset", process.env.REACT_APP_UPLOAD_PRESET);

    const requestOptions = {
      method: "POST",
      body: formData,
    };
    fetch(url, requestOptions)
      .then((res) => res.json())
      .then((data) => {
        setNewPostMedia(data.url);
      })
      .catch((err) => console.log(err));
  };
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
          <div
            onClick={() => {
              console.log(post?.user_id);
              dispatch(changecurrentid(post?.user_id));
              dispatch(getUser(currentId));
            }}
            className="username text-left text-gray-500 "
          >
            {post?.username}
          </div>
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
                navigate("/");
                dispatch(getAllPosts());
                setPostOptionsVisible(!postOptionsVisible);
                notify("Post Deleted", "success");
              }}
            >
              Delete post
            </div>
          </div>
        ) : null}
      </div>
      {editVisible ? null : (
        <Link
          to={`post/${post?.username}/${post?._id}`}
          className="media__container "
        >
          <img className="media m-4 rounded-3xl " alt="" src={post?.media} />
        </Link>
      )}
      {editVisible ? (
        <div className="edit-post-media rounded-3xl cursor-pointer relative m-8">
          <input
            type="file"
            className="image-input cursor-pointer"
            onChange={(e) => {
              handleOnPostMediaChange(e)
            }}
          />
          <img
            src={newPostMedia}
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
          onChange={(e) => {
            setNewPostContent(e.target.value);
          }}
          value={newPostContent}
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
            notify("Post Saved", "success");
          }}
        >
          Save
        </div>
      ) : null}
      <div className="post-options mb-8 flex justify-center items-center">
        <span
          tabIndex={"1"}
          onClick={() => {
            if (
              post?.likes?.likedBy?.some(
                (likedBy) => ownerData?.username === likedBy.username
              )
            ) {
              dislikePost(post._id, authToken);
              dispatch(getPagedPosts({ pageNum }));
              dispatch(getAllPosts);
              notify("Post Disliked", "success");
            } else {
              likePost(post._id, authToken);
              dispatch(getPagedPosts({ pageNum }));
              dispatch(getAllPosts);
              notify("Post Liked", "success");
            }
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
          to={`post/${post?.username}/${post?._id}`}
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
        <span
          className="share material-symbols-rounded ml-8 text-sky-400  rounded-full"
          onClick={() => {
            navigator.clipboard.writeText(
              `https://fitgram-app.netlify.app/post/${post?.username}/${post._id}`
            );
            notify("Post Link Copied", "success");
          }}
        >
          send
        </span>
        <span
          className="bookmark material-symbols-rounded ml-auto mr-8 text-green-400  rounded-full"
          onClick={() => {
            if (
              bookmarked?.some(
                (bookmarkedPost) => bookmarkedPost?._id === post?._id
              ) === true
            ) {
              removeFromBookmark(post?._id, authToken);
              notify("Bookmark Removed", "success");
            } else {
              addToBookmark(post?._id, authToken);
              notify("Bookmark Added", "success");
            }

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