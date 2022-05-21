import React,{useState} from 'react'
import "./LandingPage.css";
import love from "../../assets/images/love.svg";
import like from "../../assets/images/like.svg";
import care from "../../assets/images/care.svg";
import wow from "../../assets/images/wow.svg";
import {Link} from "react-router-dom"
import { useTheme } from '../../Context/Theme-Context';
const LandingPage = () => {
    const landingPageImages = [
      "https://images.unsplash.com/photo-1590556409458-6bce3299e4a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1566501206188-5dd0cf160a0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1590556409324-aa1d726e5c3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    ];
    const [count, setCount] = useState(0);
    setTimeout(() => {
        if (count <= 2) { setCount(count + 1); }
        if(count===3){
            setCount(0);
      }
    }, 4000)
  const { themeObject }= useTheme();
  return (
    <div
      className="landing__container "
      style={{ backgroundColor: themeObject.primary }}
    >
      <div className="landing__heading__container">
        <h2
          className="landing__subheading text-4xl   text-left w-full"
          style={{ color: themeObject.text }}
        >
          Is social media making you unfit?
        </h2>
        <h1
          className="landing__heading text-8xl  my-6 text-left w-full font-extrabold"
          style={{ color: themeObject.text }}
        >
          Introducing <span className="text-purple-400">Fitgram</span>
          <span className="material-symbols-rounded text-purple-400">
            magic_button
          </span>
        </h1>
        <ul className="w-full">
          <li
            className="landing__bullet text-3xl  m-2 text-left  w-full"
            style={{ color: themeObject.text }}
          >
            Find New Fitness Partners,
          </li>
          <li
            className="landing__bullet text-3xl  m-2 text-left  w-full"
            style={{ color: themeObject.text }}
          >
            Share Your Journey & Keep Growing
          </li>
        </ul>
        <Link
          to="/login"
          className="get-started cursor-pointer h-12 bg-purple-500 w-40 rounded-xl self-start ml-2 my-4 flex justify-center items-center text-2xl   transition-transform"
          style={{ color: themeObject.text }}
        >
          Get Started
        </Link>
        <h5
          className="landing__subheading text-2xl p-2  text-left w-full"
          style={{ color: themeObject.text }}
        >
          Don't Have an Account?{" "}
          <Link to="/signup" className="text-purple-400 cursor-pointer">
            Signup
          </Link>
        </h5>
      </div>
      <div
        className="landing__image__container shadow-2xl"
        style={{
          backgroundImage: `url(${landingPageImages[count]})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <img src={love} className="scattered__image__one" />
        <img src={care} className="scattered__image__two" />
        <img src={wow} className="scattered__image__three" />
        <img src={like} className="scattered__image__four" />
      </div>
    </div>
  );
}

export default LandingPage