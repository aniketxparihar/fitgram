import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { useModal } from '../../Context/Modal-Context';
import { useTheme } from '../../Context/Theme-Context';
import { addPost, getAllPosts } from "../../services";
import Picker from "emoji-picker-react";
import "./NewPostModal.css"
import { toast } from 'react-toastify';
const NewPostModal = () => {
    const { themeObject } = useTheme();
  const { modalNewPostVisible, setModalNewPostVisible } = useModal();
  const { ownerData } = useSelector((store) => store.user);
  
  const { authToken } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const [newPostContent, setNewPostContent] = useState("");
  const [newPostMedia, setNewPostMedia] = useState("");
  const [imageReceived, setImageReceived] = useState(false);
  const [event, setEvent] = useState(null);
  const [chosenEmoji, setChosenEmoji] = useState(false);
  const onEmojiClick = (event, emojiObject) => {
    console.log(emojiObject);
    setNewPostContent(() => newPostContent + emojiObject.emoji);
    setChosenEmoji(!chosenEmoji);
  };
  const handleOnPostMediaChange = async (e) => {
    const imageFile = e.target.files[0];
    if (Math.floor(imageFile / 1000000) > 3) {
      console.log("Image file size should be less than 3MB", "error");
      return;
    }
    const url = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`;
    const formData = new FormData();
    formData.append("file", imageFile);
    formData.append("upload_preset", process.env.REACT_APP_UPLOAD_PRESET);

    const requestOptions = {
      method: "POST",
      body: formData,
    };
    fetch(url, requestOptions)
      .then((res) => res.json())
      .then((data) => {
        setNewPostMedia(data.url);
        setImageReceived(!imageReceived);
        setEvent(e);
      })
      .catch((err) => console.log(err));
  };
const notify = (text, type) => {
  switch (type) {
    case "success":
      toast.success(text);
      return;
    case "failed":
      toast.failed(text);
      return;
    default:
      return;
  }
};
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
          <div className="new-post-modal__options relative">
            <div className="media-input__container flex">
              <input
                type="file"
                accept="image/*"
                className="media-input w-52 cursor-pointer"
                onChange={(e) => {
                  handleOnPostMediaChange(e);
                }}
                style={{
                  color: themeObject.text,
                }}
              />
              <span className="material-symbols-rounded text-violet-500  rounded-full mr-auto cursor-pointer">
                perm_media
              </span>
            </div>
            <span
              className="material-symbols-rounded text-violet-500  rounded-full mr-auto cursor-pointer"
              onClick={() => setChosenEmoji(!chosenEmoji)}
            >
              add_reaction
            </span>

            {chosenEmoji ? (
              <div className="emoji-container absolute">
                <Picker onEmojiClick={onEmojiClick} />
              </div>
            ) : null}
            <div
              className="add-post w-32 text-xl font-bold  bg-violet-700 text-gray-50 rounded-3xl "
              disabled={newPostContent.length < 1}
              className="add-post w-32 text-xl font-bold  bg-violet-700 text-gray-50 rounded-3xl cursor-pointer"
              onClick={() => {
                if (imageReceived) {
                  addPost(
                    { content: newPostContent, media: newPostMedia },
                    authToken
                  );
                  dispatch(getAllPosts());
                  setNewPostContent("");
                  setNewPostMedia("");
                  event.target.value = null;
                  setEvent(null);
                  setImageReceived(!imageReceived);
                  notify("Post Addded", "success");
                }
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