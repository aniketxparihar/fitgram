import React from 'react'
import "./Post.css"
import PostCard from '../../Components/PostCard/PostCard';
import Comments from '../../Components/Comments/Comments';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Post = (postOptions) => {
  const params = useParams();
  const { homefeed } = useSelector((store) => store.post);
  const { ownerData } = useSelector((store) => store.user);
  const post = homefeed.filter((post) => post._id === params.postId)[0];
  return (
    <>
      <PostCard post={post} postOptions={post?.username===ownerData?.username} />
      <Comments post={post} />
    </>
  );
}

export default Post