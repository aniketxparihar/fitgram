import React from 'react'
import { useSelector } from 'react-redux';
import PostCard from '../../Components/PostCard/PostCard';
import Search from '../../Components/Search/Search';
import { useTheme } from '../../Context/Theme-Context';
import "./Explore.css"
const Explore = () => {
  const { themeObject } = useTheme();
  const { explorefeed } = useSelector((store) => store.post);
  const { ownerData } = useSelector((store) => store.user);
  return(
     <div className="flex flex-col items-center">
       <div
         className="explore-feed__heading text-3xl font-bold m-8 "
         style={{ color: themeObject.text }}
       >
         Explore Feed
       </div>
       {explorefeed?.map((post) => {
         return <PostCard post={post} postOptions={post.username === ownerData.username}/>;
       })}
     </div>
   );
}

export default Explore