import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import PostCard  from '../../Components/PostCard/PostCard'
import { getAllPostsFromUsername } from '../../services'
const ProfilePosts = () => {
  const { userdata,ownerData } = useSelector((store) => store.user)
  const [userPosts, setUserPosts] = useState([]);
  const { homefeed } = useSelector((store) => store.post);
  
  useEffect(() => {
    (async () => {
    const res = await getAllPostsFromUsername(userdata?.username);
    setUserPosts(res.data.posts);
  })()}, [userdata,homefeed])
  return (userPosts?.map((post) => {return (
    <PostCard key={post._id} post={post} postOptions={post.username === ownerData.username} />
  );}))
}

export default ProfilePosts