import React from 'react'
import PostCard from '../../Components/PostCard/PostCard';
import Search from '../../Components/Search/Search';
import { useTheme } from '../../Context/Theme-Context';
import "./Explore.css"
const Explore = () => {
   const { themeObject } = useTheme();
   return (
     <div className="flex flex-col items-center">
       <div
         className="explore-feed__heading text-3xl font-bold m-8 "
         style={{ color: themeObject.text }}
       >
         Explore Feed
       </div>
       <PostCard />
     </div>
   );
}

export default Explore