import React,{useEffect} from 'react'
import Home_Profile from '../../Components/Home-Profile/Home_Profile';
import YouMightLike from '../../Components/Home-YouMightLike/YouMightLike';
import Search from '../../Components/Search/Search';
import Sidebar from '../../Components/Sidebar/Sidebar';
import { useTheme } from '../../Context/Theme-Context';
import { Outlet } from 'react-router-dom';
import "./Home.css";
import NewPostModal from '../../Components/NewPostModal/NewPostModal';
import { useSelector, useDispatch } from 'react-redux';
import { getAllUsers, getUser, getOwner, getAllPosts, getBookmarks } from "../../services";
//slices
import { changecurrentid } from '../../redux/UserSlice';
import BottomBar from '../../Components/BottomBar/BottomBar';

export const Home = () => {
  const { themeObject } = useTheme();
  const dispatch = useDispatch();
  //state values
  const { user} = useSelector((store) => store.auth);
  const { currentId, userEdited } = useSelector((store) => store.user);
  const { homefeed } = useSelector((store) => store.post);

  useEffect(() => {
    dispatch(getOwner(user._id));
    //on login the currentId will be equal to the owner Id
    dispatch(changecurrentid(user._id));
    dispatch(getAllPosts())
  }, []);
  
  useEffect(() => {
    // state will will store data of owner on
    //load and will change with updated currentIds
    dispatch(getUser(currentId));
    dispatch(getAllUsers());
  }, [currentId, userEdited]);
 
  
  return (
    <div
      className="home__container"
      style={{ backgroundColor: themeObject.primary }}
    >
      <div className="home__left ">
        <Sidebar />
      </div>
      <div className="home__center">
        <Outlet />
        <NewPostModal />
      </div>
      <div className="home__right">
        <Search />
        <Home_Profile />
        <YouMightLike />
      </div>
      <BottomBar/>
    </div>
  );
}
