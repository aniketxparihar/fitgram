import React from 'react'
import { useSelector } from 'react-redux';
import ConnectUserCard from '../../Components/ConnectUserCard/ConnectUserCard';
import "./Followers.css"

const Followers = () => {
  const { userdata } = useSelector((store) => store.user);
  return (
    <div className="following__container flex items-center flex-col ">
      {userdata?.followers?.map((userdata) => {
        return <ConnectUserCard userdata={userdata} />;
      })}
    </div>
  );
}

export default Followers