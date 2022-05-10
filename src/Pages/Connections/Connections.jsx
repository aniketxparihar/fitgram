import React from 'react'
import { Outlet, NavLink } from 'react-router-dom';
import { useTheme } from '../../Context/Theme-Context';
import "./Connections.css"
const Connections = () => {
  const { themeObject } = useTheme();
  return (
    <div className="connections__container m-8 ">
      <div className="connections-select__container mb-8">
        <NavLink
          to="/connections/followers"
          className="select-followers h-14 text-2xl font-bold rounded-3xl"
          style={({ isActive }) => ({
            color: themeObject.text,
            backgroundColor: isActive ? themeObject.secondary : "transparent",
          })}
        >
          Followers
        </NavLink>

        <NavLink
          to="/connections/following"
          className="select-followers h-14 text-2xl font-bold rounded-3xl"
          style={({ isActive }) => ({
            color: themeObject.text,
            backgroundColor: isActive ? themeObject.secondary : "transparent",
          })}
        >
          Following
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}

export default Connections