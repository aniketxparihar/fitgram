import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import NewPost from '../../Components/NewPost/NewPost';
import PostCard from '../../Components/PostCard/PostCard';
import { useTheme } from '../../Context/Theme-Context';
import "./Feed.css";
const Feed = () => {
  const { ownerData } = useSelector((store) => store.user);
  const { homefeed } = useSelector((store) => store.post);
  const { themeObject } = useTheme();
  const [sortVisible, setSortVisible] = useState(false);
  const [sort, setSort] = useState("recent");
  const [homefeedSorted, setHomefeedSorted] = useState(JSON.parse(JSON.stringify(homefeed)));
  useEffect(() => {
   sortFeed();
  },[sort,homefeed])
  const sortFeed = () => {
      setHomefeedSorted(
        homefeed?.slice().sort((post1, post2) => {
          switch (sort) {
            case "trending":
              return post2?.likes?.likeCount - post1?.likes?.likeCount;
            case "older":
              return (
                Number(
                  post1?.createdAt.substring(0, 9).split("-").join("") +
                    post1?.createdAt.substring(11, 19).split(":").join("")
                ) -
                Number(
                  post2?.createdAt.substring(0, 9).split("-").join("") +
                    post2?.createdAt.substring(11, 19).split(":").join("")
                )
              );
            case "recent":
              return (
                Number(
                  post2?.createdAt.substring(0, 9).split("-").join("") +
                    post2?.createdAt.substring(11, 19).split(":").join("")
                ) -
                Number(
                  post1?.createdAt.substring(0, 9).split("-").join("") +
                    post1?.createdAt.substring(11, 19).split(":").join("")
                )
              );
            default:
              return;
          }
        })
      );
   }
  return (
    <div className="relative">
      <div className="flex  justify-end items-center m-8">
        <span
          className="material-symbols-rounded cursor-pointer "
          style={{ color: themeObject.text }}
          onClick={() => setSortVisible(!sortVisible)}
        >
          auto_awesome
        </span>
      </div>
      {sortVisible ? (
        <div className="sort__container flex flex-col justify-start items-start pl-8 pr-8 pt-4 pb-4 rounded-2xl border bg-violet-600">
          <div
            className="m-2 ml-0 text-m font-bold underline cursor-pointer"
            style={{ color: themeObject.text }}
            onClick={() => {
              setSort("");
            }}
          >
            Clear
          </div>
          <div
            className={`m-2  text-xl font-bold ${
              sort === "recent" ? "underline" : null
            } cursor-pointer`}
            style={{ color: themeObject.text }}
            onClick={() => {
              setSort("recent");
            }}
          >
            Recent
          </div>
          <div
            className={`m-2  text-xl font-bold ${
              sort === "older" ? "underline" : null
            } cursor-pointer`}
            style={{ color: themeObject.text }}
            onClick={() => {
              setSort("older");
            }}
          >
            Older
          </div>
          <div
            className={`m-2 mb-4 text-xl font-bold ${
              sort === "trending" ? "underline" : null
            } cursor-pointer`}
            style={{ color: themeObject.text }}
            onClick={() => {
              setSort("trending");
            }}
          >
            Trending
          </div>
        </div>
      ) : null}
      <NewPost />
      {homefeedSorted
        ?.filter((post) => {
          return (
            post?.username === ownerData?.username ||
            ownerData?.following?.some(
              (followedUser) => followedUser?.username === post?.username
            )
          );
        })
        .map((post) => {
          return (
            <PostCard
              post={post}
              postOptions={post.username === ownerData.username}
            />
          );
        })}
    </div>
  );
}

export default Feed