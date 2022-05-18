import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import PostCard from '../../Components/PostCard/PostCard'
import { getAllPosts } from '../../services';

const ProfileLikedPosts = () => {
  const { userdata, ownerData } = useSelector((store) => store.user);
  const { homefeed } = useSelector((store) => store.post);
 
  return (
    <>
      {homefeed?.map((post) => {
        return (
          <PostCard
            post={post}
            postOptions={post.username === ownerData.username}
          />
        );
      })}
    </>
  );
}

export default ProfileLikedPosts