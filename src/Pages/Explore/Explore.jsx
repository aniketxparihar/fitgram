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
    totalPages,
  } = useSelector((store) => store.post);
  const dispatch = useDispatch();
  const [lastPost, setLastPost] = useState();
  const intersectionObserver = useRef(
    new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) dispatch(setPageNum({ pageNum }));
      },
      { threshold: 1 }
    )
  );
  useEffect(() => {
    dispatch(getPagedPosts({ pageNum }));
  }, [pageNum, posts,totalPages]);
  useEffect(() => {
    // setting new last post
    if (lastPost) intersectionObserver.current.observe(lastPost);
    // unsetting the previous last post
    return () => {
      if (lastPost) intersectionObserver.current.disconnect();
    };
  }, [lastPost, intersectionObserver]);
  console.log(pageNum,pagedPosts);
  return (
    <div className="flex flex-col items-center">
      <div
        className="explore-feed__heading text-3xl font-bold m-8 "
        style={{ color: themeObject.text }}
      >
        Explore Feed
      </div>
      {pagedPosts.map((post, index) =>
        index === pagedPosts.length - 1 && pageNum < totalPages ? (
          <PostCard post={post} key={post._id} ref={setLastPost} />
        ) : (
          <PostCard post={post} key={post._id} />
        )
      )}
      {pagedPostStatus === "pending" && <div>Loading...</div>}
    </div>
  );
};

export default Explore;
