import React, { useState } from "react";
import "./EditProfileModal.css";
import { useModal } from "../../Context/Modal-Context";
import { useTheme } from "../../Context/Theme-Context";
import { editUser, getUser } from "../../services";
import { useDispatch, useSelector } from "react-redux";
import { useredited } from "../../redux/UserSlice";
import axios from "axios";
const EditProfileModal = ({ userdata }) => {
  const { themeObject } = useTheme();
  const { modalEditProfileVisible, setModalEditProfileVisible } = useModal();
  const [newBio, setNewBio] = useState(userdata?.bio);
  const [newPortfolio, setNewPortfolio] = useState(userdata?.link);
  const dispatch = useDispatch();
  const { authToken } = useSelector((store) => store.auth);

  const handleOnProfileImageChange = async (e) => {
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
        editUser(
          {
            ...userdata,
            profilePicture: data.url,
          },
          authToken
        );
        dispatch(getUser(userdata._id));
      })
      .catch((err) => console.log(err));
  };

  const handleOnCoverImageChange = async (e) => {
    const imageFile = e.target.files[0];
    if (Math.floor(imageFile / 1000000) > 3) {
      console.log("Image file size should be less than 3MB", "error");
      return;
    }
    const url =`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`;
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
        editUser(
          {
            ...userdata,
            coverPicture: data.url,
          },
          authToken
        );
        dispatch(getUser(userdata._id));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      className="edit-modal__container"
      style={{ display: modalEditProfileVisible }}
    >
      <div
        className="profile__container mt-8 mb-8 rounded-3xl border"
        style={{ backgroundColor: themeObject.secondary }}
      >
        <span
          className="edit-cancel p-2 material-symbols-rounded  cursor-pointer  rounded-3xl ml-8 mt-8"
          style={{
            backgroundColor: themeObject.primary,
            color: themeObject.text,
          }}
          onClick={() => setModalEditProfileVisible("none")}
        >
          clear
        </span>

        <div className="edit-cover-image rounded-t-3xl cursor-pointer">
          <input
            type="file"
            className="image-input cursor-pointer"
            onChange={(e) => handleOnCoverImageChange(e)}
          />
          <img
            src={userdata?.coverPicture}
            alt=""
            className="edit-profile__cover__image rounded-t-3xl"
          />
          <span className="edit-media text-gray-50 material-symbols-rounded  cursor-pointer  rounded-3xl bg-gray-800 p-4">
            perm_media
          </span>
        </div>

        <div className="edit-display-picture h-40 w-40 rounded-full m-6 cursor-pointer">
          <img
            src={userdata?.profilePicture}
            alt=""
            className="edit-profile__display__picture  rounded-full m-6"
          />
          <input
            type="file"
            accept="image/*"
            className="image-input rounded-full cursor-pointer"
            onChange={(e) => handleOnProfileImageChange(e)}
          />
          <span className="edit-media text-gray-50 material-symbols-rounded  cursor-pointer  rounded-3xl bg-gray-800 p-4">
            perm_media
          </span>
        </div>

        <div
          style={{ color: themeObject.text }}
          className="edit-profile h-12 w-32 border border-gray-400 flex justify-center items-center rounded-3xl text-xl cursor-pointer"
          onClick={() => {
            editUser(
              {
                ...userdata,
                bio: newBio,
                link: newPortfolio,
              },
              authToken
            );
            setModalEditProfileVisible("none");
            dispatch(useredited());
          }}
        >
          Save
        </div>

        
        <div className="input__container border mb-4 rounded-xl mt-32">
          <label
            className="label"
            htmlFor="edit-profile__bio "
            style={{
              backgroundColor: themeObject.secondary,
              color: themeObject.text,
            }}
          >
            Bio
          </label>
          <textarea
            id="edit-profile__bio"
            className="edit-profile__bio  text-2xl h-32 rounded-xl"
            style={{
              backgroundColor: themeObject.secondary,
              color: themeObject.text,
            }}
            value={newBio}
            placeholder={userdata?.bio}
            onChange={(e) => setNewBio(e.target.value)}
          />
        </div>
        <div className="input__container border mb-8 rounded-xl">
          <label
            className="label"
            htmlFor="edit-profile__portfolio "
            style={{
              backgroundColor: themeObject.secondary,
              color: themeObject.text,
            }}
          >
            Portfolio
          </label>
          <input
            id="edit-profile__portfolio"
            style={{
              backgroundColor: themeObject.secondary,
              color: themeObject.text,
            }}
            className="edit-profile__portfolio text-2xl text-gray-400 h-12 rounded-xl "
            Value={newPortfolio}
            placeholder={userdata?.link}
            onChange={(e) => setNewPortfolio(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
