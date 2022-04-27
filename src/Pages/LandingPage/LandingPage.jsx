import React,{useState} from 'react'
import "./LandingPage.css";
import love from "../../assets/images/love.svg";
import like from "../../assets/images/like.svg";
import care from "../../assets/images/care.svg";
import wow from "../../assets/images/wow.svg";
import fitme from "../../assets/images/Fitme-removebg-preview.png";
import peace from "../../assets/images/peace.png"
const LandingPage = () => {
    const landingPageImages = [
      "https://images.unsplash.com/photo-1599744423264-76df84e91758?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1608405059861-b21a68ae76a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1584464457692-54516d705fe0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1600026453346-a44501602a02?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80",
    ];
    const [count, setCount] = useState(0);
    setTimeout(() => {
        if (count <= 2) { setCount(count + 1); }
        if(count===3){
            setCount(0);
}    }, 4000)
  return (
    <div className="landing__container bg-gray-800 ">
      <div className="landing__heading__container">
        <h2 className="landing__subheading text-4xl  text-white text-left w-full">
          Is social media making you unfit?
        </h2>
        <h1 className="landing__heading text-7xl text-white my-6 text-left w-full">
          Introducing Fitme⚡
        </h1>
        <ul className="w-full">
          <li className="landing__bullet text-3xl text-white m-2 text-left  w-full">
            Find New Fitness Partners,
          </li>
          <li className="landing__bullet text-3xl text-white m-2 text-left  w-full">
            Share Your Journey & Keep Growing
          </li>
        </ul>
        <div className="cursor-pointer h-12 bg-violet-400 w-40 rounded-xl self-start ml-2 my-4 flex justify-center items-center text-xl text-white hover:bg-violet-500">
          Get Started
        </div>
        <h5 className="landing__subheading text-2xl p-2 text-white text-left w-full">
          Don't Have an Account?{" "}
          <span className="text-violet-400 cursor-pointer">Signup</span>
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