import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { useModal } from '../../Context/Modal-Context';
import { useTheme } from '../../Context/Theme-Context';
import { addPost, getAllPosts } from "../../services";
import "./NewPostModal.css"
const NewPostModal = () => {
    const { themeObject } = useTheme();
  const { modalNewPostVisible, setModalNewPostVisible } = useModal();
  const { ownerData } = useSelector((store) => store.user);
  
  const { authToken } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const [newPostContent, setNewPostContent] = useState("");
  const [newPostMedia, setNewPostMedia] = useState("");

    return (
      <div
        className="modal__container"
        style={{ display: modalNewPostVisible }}
      >
        <div
          className="new-post-modal__container rounded-3xl flex flex-col border"
          style={{ backgroundColor: themeObject.secondary }}
        >
          <span
            className="cancel p-2 mt-8 ml-8 material-symbols-rounded  cursor-pointer  rounded-3xl "
            style={{
              backgroundColor: themeObject.primary,
              color: themeObject.text,
            }}
            onClick={() => setModalNewPostVisible("none")}
          >
            clear
          </span>
          <div className="new-post__wrapper flex p-8">
            <img
              className="display-picture h-20 w-20 rounded-full"
              alt=""
              src={ownerData.profilePicture}
            />
            <textarea
              type="text"
              className="new-post-modal__input  rounded-3xl ml-8 text-xl text-gray-50"
              placeholder="What's Happening"
              style={{
                backgroundColor: themeObject.primary,
                color: themeObject.text,
              }}
              value={newPostContent}
              onChange={(e) => setNewPostContent(e.target.value)}
            />
          </div>
          <div className="new-post-modal__options">
            <span className="material-symbols-rounded text-violet-500   rounded-full mr-8">
              perm_media
            </span>

            <span className="material-symbols-rounded text-violet-500  rounded-full mr-8">
              add_reaction
            </span>

            <span className="material-symbols-rounded text-violet-500  rounded-full mr-8">
              gif_box
            </span>

            <span className="material-symbols-rounded text-violet-500  rounded-full ">
              pin_drop
            </span>
            <div
              className="add-post w-32 text-xl font-bold  bg-violet-700 text-gray-50 rounded-3xl "
              disabled={newPostContent.length < 1}
              className="add-post w-32 text-xl font-bold  bg-violet-700 text-gray-50 rounded-3xl cursor-pointer"
              onClick={() => {
                addPost(
                  { content: newPostContent, media: newPostMedia },
                  authToken
                );
                dispatch(getAllPosts());
                setNewPostContent("");
                setNewPostMedia("");
              }}
            >
              Post
            </div>
          </div>
        </div>
      </div>
    );
}

export default NewPostModal