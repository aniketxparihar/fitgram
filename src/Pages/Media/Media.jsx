import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useTheme } from "../../Context/Theme-Context";
import { getAllPostsFromUsername } from "../../services";
import "./Media.css";
const Media = () => {
  const { themeObject } = useTheme();
  const { userdata, ownerData } = useSelector((store) => store.user);
  const [userPosts, setUserPosts] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await getAllPostsFromUsername(userdata?.username);
      setUserPosts(res.data.posts);
    })();
  }, [userdata]);
  return (
    <div
      className="media-items-container rounded-3xl "
      style={{ backgroundColor: themeObject.secondary }}
    >
      {userPosts.map((post) => {
        return (
          <img
            src={post.media}
            className="media-items rounded-3xl"
            alt=""
          />
        );
      })}
      
    </div>
  );
};

export default Media;
