import React from 'react'
import { useSelector } from 'react-redux';
import NewPost from '../../Components/NewPost/NewPost';
import PostCard from '../../Components/PostCard/PostCard';

const Feed = () => {
  const { ownerData } = useSelector((store) => store.user);
  const { homefeed } = useSelector((store) => store.post);
  return (
    <div>
      <NewPost />
      {homefeed?.map((post) => {
        return <PostCard post={post} postOptions={post.username===ownerData.username} />;
      })}
    </div>
  );
}

export default Feed