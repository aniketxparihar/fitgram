import React from 'react'
import ConnectUserCard from '../../Components/ConnectUserCard/ConnectUserCard';
import { useTheme } from '../../Context/Theme-Context';
import "./ConnectPeople.css"
const ConnectPeople = () => {
    const { themeObject } = useTheme();
  return (
      <div className="flex flex-col items-center">
       <div className="connect-people__heading text-3xl font-bold m-8 " style={{color:themeObject.text}}>Connect</div>
      <ConnectUserCard />
    </div>
  );
}

export default ConnectPeople