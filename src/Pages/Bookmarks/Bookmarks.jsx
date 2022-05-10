import React from 'react'
import PostCard from '../../Components/PostCard/PostCard';
import { useTheme } from '../../Context/Theme-Context';
import "./Bookmarks.css"
const Bookmarks = () => {
   const { themeObject } = useTheme();
  return (
    <div className="flex flex-col items-center">
      <div
        className="bookmarks__heading text-3xl font-bold m-8 "
        style={{ color: themeObject.text }}
      >
        Bookmarked Posts
      </div>
      <PostCard />
    </div>
  );
}

export default Bookmarks