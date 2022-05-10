import React from 'react'
import { useTheme } from '../../Context/Theme-Context';
import "./Media.css"
const Media = () => {
    const { themeObject } = useTheme();
  return (
    <div
      className="media-items-container rounded-3xl"
      style={{ backgroundColor: themeObject.secondary }}
    >
      
      <img
        src="https://images.unsplash.com/photo-1490371475955-4cb3bfc72f71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
        className="media-items rounded-3xl"
        alt=""
      />
      <img
        src="https://images.unsplash.com/photo-1590556409324-aa1d726e5c3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        className="media-items rounded-3xl "
        alt=""
      />
     
    </div>
  );
}

export default Media