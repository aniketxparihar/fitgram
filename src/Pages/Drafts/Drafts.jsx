import React from 'react'
import PostCard from '../../Components/PostCard/PostCard';
import { useTheme } from '../../Context/Theme-Context';
import "./Drafts.css"
const Drafts = () => {
   const { themeObject } = useTheme();
  return (
    <div className="flex flex-col items-center">
      <div
        className="drafts__heading text-3xl font-bold m-8 "
        style={{ color: themeObject.text }}
      >
       Drafted Posts
      </div>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  );
}

export default Drafts