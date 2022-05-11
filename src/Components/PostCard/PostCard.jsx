import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import { useTheme } from '../../Context/Theme-Context';
import "./PostCard.css"
const PostCard = ({postOptions}) => {
    const { themeObject } = useTheme();
  const [postOptionsVisible, setPostOptionsVisible] = useState(false);
  const [editVisible, setEditVisible] = useState(false);
  return (
    <div
      className="post-card__container m-8 rounded-3xl relative"
      style={{ backgroundColor: themeObject.secondary }}
    >
      <div className="user-data__wrapper flex">
        <img
          className="display-picture h-28 w-28 rounded-3xl ml-8 mt-8"
          alt=""
          src="https://images.unsplash.com/photo-1485528562718-2ae1c8419ae2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=858&q=80"
        />
        <div className="user-data flex flex-col text-gray-50 justify-center ml-8 text-xl">
          <div
            className="name text-left text-gray-200"
            style={{ color: themeObject.text }}
          >
            John Doe
          </div>
          <div className="username text-left text-gray-500">john@doewwd</div>
        </div>
        {postOptions ? (
          <span
            style={{ color: themeObject.text }}
            className="post-settings material-symbols-rounded   rounded-full m-8 cursor-pointer"
            onClick={() => setPostOptionsVisible(!postOptionsVisible)}
          >
            more_horiz
          </span>
        ) : null}
        {postOptionsVisible ? (
          <div className="post-settings__container  bg-violet-700 rounded-xl ">
            <div
              className="post-settings--edit font-bold text-gray-50 border-b rounded-t-xl hover:bg-violet-800 cursor-pointer"
              onClick={() => {
                setEditVisible(!editVisible);
                setPostOptionsVisible(!postOptionsVisible);
              }}
            >
              Edit post
            </div>
            <div className="post-settings--delete font-bold text-gray-50 rounded-b-xl hover:bg-violet-800 cursor-pointer">
              Delete post
            </div>
          </div>
        ) : null}
      </div>
      {editVisible ? null : 
        <div className="media__container p-8">
          <img
            className="media m-4 rounded-3xl "
            alt=""
            src="https://images.unsplash.com/photo-1633596683562-4a47eb4983c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
          />
        </div>
      }
      {editVisible ? (
        <div className="edit-post-media rounded-3xl cursor-pointer relative m-8">
          <input type="file" className="image-input cursor-pointer" />
          <img
            src="https://images.unsplash.com/photo-1444090542259-0af8fa96557e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
            className="edit-post__image rounded-3xl"
          />
          <span className="edit-media text-gray-50 material-symbols-rounded  cursor-pointer  rounded-3xl bg-gray-800 p-4">
            perm_media
          </span>
        </div>
      ) : null}

      {editVisible ? null : (
        <div
          className="content mb-8 ml-8 mr-8 text-left text-xl"
          style={{ color: themeObject.text }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum esse
          veniam itaque doloribus✨ 🌙 non voluptate corrupti temporibus
          deleniti corporis incidunt error tempore, fugiat totam✨ 🌙 aperiam
          quibusdam atque quia assumenda natus? Nulla a, odio totam pariatur
          nesciunt soluta, adipisci consectetur aliquid perferendis, quia illum
          ad dolor labore✨ 🌙
        </div>
      )}
      {editVisible ? (
        <textarea
          style={{
            backgroundColor: themeObject.secondary,
            color: themeObject.text,
          }}
          className="edit-content  mb-8 ml-8 mr-8 text-xl text-left border rounded-xl p-2"
          value=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum esse
        veniam itaque doloribus✨ 🌙 non voluptate corrupti temporibus deleniti
        corporis incidunt error tempore, fugiat totam✨ 🌙 aperiam quibusdam
        atque quia assumenda natus? Nulla a, odio totam pariatur nesciunt
        soluta, adipisci consectetur aliquid perferendis, quia illum ad dolor
        labore✨ 🌙"
        />
      ) : null}
      {editVisible ? (
        <div
          className="h-14 w-32 bg-violet-700 text-gray-50 font-bold ml-8 rounded-3xl text-xl flex justify-center items-center cursor-pointer"
          onClick={() => setEditVisible(!editVisible)}
        >
          Save
        </div>
      ) : null}
      <div className="post-options mb-8">
        <span
          tabIndex={"1"}
          className="like material-symbols-rounded ml-8 text-red-400  rounded-full"
        >
          favorite
        </span>
        <Link
          to="/post"
          className="comment material-symbols-rounded ml-8 text-gray-400  rounded-full"
        >
          comment
        </Link>
        <span className="share material-symbols-rounded ml-8 text-sky-400  rounded-full">
          send
        </span>
        <span className="bookmark material-symbols-rounded ml-auto mr-8 text-green-400  rounded-full">
          bookmark
        </span>
      </div>
    </div>
  );
}

export default PostCard