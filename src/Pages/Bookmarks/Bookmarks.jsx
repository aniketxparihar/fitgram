import React from 'react'
import { useSelector } from 'react-redux';
import PostCard from '../../Components/PostCard/PostCard';
import { useTheme } from '../../Context/Theme-Context';
import "./Bookmarks.css"
const Bookmarks = () => {
  const { themeObject } = useTheme();
  const { ownerData } = useSelector((store) => store.user);
  const { bookmarked }=useSelector((store) => store.post)
  return (
    <div className="flex flex-col items-center">
      <div
        className="bookmarks__heading text-3xl font-bold m-8 "
        style={{ color: themeObject.text }}
      >
        Bookmarked Posts
      </div>
      {
        bookmarked?.map((post) => {
          return <PostCard post={post} postOptions={post?.username===ownerData?.username}/>;
        })
      }
     
    </div>
  );
}

export default Bookmarks