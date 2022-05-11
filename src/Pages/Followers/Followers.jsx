import React from 'react'
import ConnectUserCard from '../../Components/ConnectUserCard/ConnectUserCard';
import "./Followers.css"

const Followers = () => {
  return (
    <div className="followers__container flex items-center flex-col ">
      <ConnectUserCard />
    </div>
  );
}

export default Followers