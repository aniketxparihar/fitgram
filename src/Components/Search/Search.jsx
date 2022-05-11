import React,{useState} from "react";
import { useTheme } from "../../Context/Theme-Context";
import "./Search.css";
const Search = () => {
  const { themeObject } = useTheme();
  const [selectBorder, setSelectBorder] = useState("border border-transparent");

  return (
    <div
      div
      className={`search__container h-14 m-8 rounded-full ${selectBorder}`}
      style={{
        backgroundColor: themeObject.secondary,
        color: themeObject.text,
      }}
      onMouseOver={() => setSelectBorder("border border-violet-400")}
      onMouseLeave={() => setSelectBorder("border border-transparent")}
    >
      <span className="search__icon material-symbols-rounded text-violet-400 ">
        search
      </span>
      <input
        type="text"
        className="search rounded-full bg-transparent p-2 font-bold"
        placeholder="Search Fitme"
      />
    </div>
  );
};

export default Search;
