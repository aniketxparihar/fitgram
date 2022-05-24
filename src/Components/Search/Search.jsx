import React,{useState} from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useTheme } from "../../Context/Theme-Context";
import SearchedUsers from "../SearchedUsers/SearchedUsers";
import "./Search.css";
const Search = () => {
  const { themeObject } = useTheme();
  const [selectBorder, setSelectBorder] = useState("border border-transparent");
  const { allusers } = useSelector((store) => store.user);
  const [searchString, setSearchString] = useState("");
  const [searchdata, setSearchdata] = useState(null);
  useEffect(() => {
    setSearchdata(() =>
      searchString !== ""
        ? allusers?.filter(
            (user) =>
              user?.firstName
                ?.toLowerCase()
                .includes(searchString?.toLowerCase()) ||
              user?.username
                ?.toLowerCase()
                .includes(searchString?.toLowerCase()) ||
              user?.lastName
                ?.toLowerCase()
                .includes(searchString?.toLowerCase())
          )
        : null
    );
  }, [searchString]);
  
  return (
    <div
      div
      className={`search__container h-14 m-8 rounded-full ${selectBorder} relative`}
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
        onChange={(e) => {
          setSearchString(e.target.value);
        }}
      />
      {searchdata!==null? <SearchedUsers users={searchdata} /> : null}
    </div>
  );
};

export default Search;
