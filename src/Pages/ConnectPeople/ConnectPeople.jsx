import React,{useEffect,useState} from 'react'
import ConnectUserCard from '../../Components/ConnectUserCard/ConnectUserCard';
import { useTheme } from '../../Context/Theme-Context';
import "./ConnectPeople.css"
import { useSelector } from 'react-redux';



const ConnectPeople = () => {
  const { themeObject } = useTheme();
  const { allusers,ownerData } = useSelector((store) => store.user);
  
  return (
      <div className="flex flex-col items-center">
       <div className="connect-people__heading text-3xl font-bold m-8 " style={{color:themeObject.text}}>Connect</div>
      {allusers?.filter((userdata)=>userdata?._id!==ownerData?._id&&ownerData?.following?.some((followingUser)=>followingUser?._id===userdata?._id)===false).map((userdata) => {
        return(<ConnectUserCard userdata={userdata} key={userdata.id} />)
      })}
    </div>
  );
}

export default ConnectPeople