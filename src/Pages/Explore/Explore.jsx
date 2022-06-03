import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostCard from "../../Components/PostCard/PostCard";
import { useTheme } from "../../Context/Theme-Context";
import { setPageNum } from "../../redux/PostSlice";
import { getPagedPosts } from "../../services/postService";
import "./Explore.css";
const Explore = () => {
  const { themeObject } = useTheme();
  const {
    posts,
    pagedPosts,
    pagedPostStatus,
    pageNum,
  } = useSelector((store) => store.post);
  const dispatch = useDispatch();
 
    useEffect(() => dispatch(getPagedPosts({ pageNum })), [pageNum, posts]);

  
  const loader = useRef();
    useEffect(() => {
      const elementRef = loader.current;

      const handleObserver = (entries) => {
        const target = entries[0];
        if (target.isIntersecting) {
          dispatch(setPageNum())
        }
      };

      // When we register our observer, It will be called once when first initialized
      // Then It will auto call whenever observer comes in viewport
      const observer = new IntersectionObserver(handleObserver);
      if (elementRef) observer.observe(elementRef);

      return () => {
        observer.unobserve(elementRef);
      };
    }, []);

  return (
    <div className="flex flex-col items-center">
      <div
        className="explore-feed__heading text-3xl font-bold m-8 "
        style={{ color: themeObject.text }}
      >
        Explore Feed
      </div>
      {pagedPosts.map((post, index) => (
        <PostCard post={post} key={post._id} />
      ))}
      <div ref={loader} className="text-gray-50 text-3xl pb-2"/>
      {pagedPostStatus === "pending" && (
      <div className="text-gray-50 text-3xl">Loading...</div>
      )}
    </div>
  );
};

export default Explore;
