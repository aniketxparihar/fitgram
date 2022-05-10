import React from "react";
import PostCard from "../../Components/PostCard/PostCard";
import { useTheme } from "../../Context/Theme-Context";
import "./Archived.css"
const Archived = () => {
  const { themeObject } = useTheme();
  return (
    <div className="flex flex-col items-center">
      <div
        className="archived__heading text-3xl font-bold m-8 "
        style={{ color: themeObject.text }}
      >
        Archived Posts
      </div>
      <PostCard/>
      <PostCard/>
      <PostCard/>
      <PostCard/>
      <PostCard/>
      <PostCard/>
      <PostCard/>
      <PostCard/>
      <PostCard/>
      <PostCard/>
      <PostCard/>
      <PostCard/>
      <PostCard/>
    </div>
  );
};

export default Archived;
