import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./Post.css"
import { useTheme } from "../../Context/Theme-Context";
import PostCard from '../../Components/PostCard/PostCard';
import Comments from '../../Components/Comments/Comments';
const Post = (postOptions) => {
  const { themeObject } = useTheme();
  const [postOptionsVisible, setPostOptionsVisible] = useState(false);
  return (
    <>
      <PostCard />
      <Comments />
    </>
  );
}

export default Post