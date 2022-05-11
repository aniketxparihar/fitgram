import React from 'react'
import NewPost from '../../Components/NewPost/NewPost';
import PostCard from '../../Components/PostCard/PostCard';

const Feed = () => {
  return (
    <div>
      <NewPost />
      <PostCard />
    </div>
  );
}

export default Feed