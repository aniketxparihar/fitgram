import React from 'react'
import { Link, Routes as RoutesContainer,Route } from "react-router-dom";
import App from './App';
import Signup from "./Pages/Auth/Signup/Signup";
import Login from "./Pages/Auth/Login/Login";
import AuthRoute from "./Components/AuthRoute/AuthRoute";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import LandingPage from './Pages/LandingPage/LandingPage';
import ForgotPassword from './Pages/Auth/FotgotPassword/ForgotPassword';
import { Home } from './Pages/Home/Home';
import Feed from './Pages/Feed/Feed';
import Profile from './Pages/Profile/Profile';
import PostCard from './Components/PostCard/PostCard';
import Media from './Pages/Media/Media';
import Followers from './Pages/Followers/Followers';
import Following from './Pages/Following/Following';
import Connections from './Pages/Connections/Connections';
import Bookmarks from './Pages/Bookmarks/Bookmarks';
import Explore from './Pages/Explore/Explore';
import ConnectPeople from './Pages/ConnectPeople/ConnectPeople';
import Archived from './Pages/Archived/Archived';
import Drafts from './Pages/Drafts/Drafts';
import Post from './Pages/Post/Post';
import ProfilePosts from './Pages/ProfilePosts/ProfilePosts';
import ProfileLikedPosts from './Pages/ProfileLikedPosts/ProfileLikedPosts';
const Router = () => {
  return (
      <RoutesContainer>
          <Route path="/" element={<App />}>
              <Route path="/landing" element={<LandingPage />} />
              <Route element={<PrivateRoute />}>
                  <Route path="/" element={<Home />}>
                      <Route index element={<Feed />} />
                      <Route path="/explore" element={<Explore/>} />
                      <Route path="/bookmarks" element={<Bookmarks />} />
                      <Route path="/archived" element={<Archived />} />
                      <Route path="/post" element={<Post />} />
                      <Route path="/drafts" element={<Drafts />} />
                      <Route path="/connect-people" element={<ConnectPeople />} />
                      <Route path="/connections" element={<Connections />} >
                          <Route index path="/connections/following" element={<Following />} />
                          <Route path="/connections/followers" element={<Followers />} />
                      </Route>
                      <Route path="/following" element={<Following />} />
                      <Route path="/profile" element={<Profile />} >
                          <Route index  element={<ProfilePosts />} />
                          <Route path="/profile/media" element={<Media />} />
                          <Route path="/profile/liked" element={<ProfileLikedPosts/>} />
                      </Route>
                      <Route path="/bookmarks" element={<Profile />} />
                  </Route>
              </Route>
              <Route element={<AuthRoute />}>
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/forgotpassword" element={<ForgotPassword />} />
              </Route>
          </Route>
      </RoutesContainer>
  )
}

export default Router