import React from 'react'
import "./EditProfileModal.css"
import { useModal } from "../../Context/Modal-Context";
import { useTheme } from "../../Context/Theme-Context";
const EditProfileModal = () => {
    const { themeObject } = useTheme();
    const { modalEditProfileVisible, setEditProfileVisible } = useModal();
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
          onClick={() => setEditProfileVisible("none")}
        >
          clear
        </span>

        <div className="edit-cover-image rounded-t-3xl cursor-pointer">
          <input type="file" className="image-input cursor-pointer" />
          <img
            src="https://images.unsplash.com/photo-1444090542259-0af8fa96557e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
            className="edit-profile__cover__image rounded-t-3xl"
          />
          <span className="edit-media text-gray-50 material-symbols-rounded  cursor-pointer  rounded-3xl bg-gray-800 p-4">
            perm_media
          </span>
        </div>

        <div className="edit-display-picture h-40 w-40 rounded-full m-6 cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1485528562718-2ae1c8419ae2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=858&q=80"
            alt=""
            className="edit-profile__display__picture h-40 w-40 rounded-full m-6"
          />
          <input
            type="file"
            className="image-input rounded-full cursor-pointer"
          />
          <span className="edit-media text-gray-50 material-symbols-rounded  cursor-pointer  rounded-3xl bg-gray-800 p-4">
            perm_media
          </span>
        </div>

        <div
          style={{ color: themeObject.text }}
          className="edit-profile h-12 w-32 border border-gray-400 flex justify-center items-center rounded-3xl text-xl cursor-pointer"
        >
          Save
        </div>

        <div className="input__container border mt-32 mb-4 rounded-xl">
          <label
            className="label"
            htmlFor="edit-profile__name"
            style={{
              backgroundColor: themeObject.secondary,
              color: themeObject.text,
            }}
          >
            Name
          </label>
          <input
            id="edit-profile__name"
            className="edit-profile__name text-2xl h-12 "
            style={{
              backgroundColor: themeObject.secondary,
              color: themeObject.text,
            }}
            Value="John Doe"
          />
        </div>
        <div className="input__container border mb-4 rounded-xl">
          <label
            className="label"
            htmlFor="edit-profile__username"
            style={{
              backgroundColor: themeObject.secondary,
              color: themeObject.text,
            }}
          >
            Username
          </label>
          <input
            id="edit-profile__username"
            style={{
              backgroundColor: themeObject.secondary,
              color: themeObject.text,
            }}
            className="edit-profile__username text-2xl text-gray-400 h-12 rounded-xl"
            Value="@Johndoe"
          />
        </div>
        <div className="input__container border mb-4 rounded-xl">
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
            value="Aspernatur id deleniti quo.✨ 🌙"
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
            Value="portfolio website"
          />
        </div>
      </div>
    </div>
  );
}

export default EditProfileModal