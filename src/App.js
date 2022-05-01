import "./App.css";
import logo from "./logo.png";
import LandingPage from "./Pages/LandingPage/LandingPage";
import { Outlet } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      <Outlet />
    </div>
  )
}