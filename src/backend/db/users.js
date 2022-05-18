import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "test@1",
    password: "test",
    bio: "Hi I am Adarsh! Let's Connect",
    link: "https://redux-toolkit.js.org/usage/usage-guide",
    profilePicture: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1961&q=80",
    coverPicture: "https://images.unsplash.com/photo-1486134030336-39b1094bf33e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1607&q=80",
    createdAt: formatDate(),
    updatedAt: formatDate(),

  },
  {
    _id: uuid(),
    firstName: "Aniket",
    lastName: "Parihar",
    username: "test@2",
    password: "test",
    bio: "Hi I am Aniket!",
    profilePicture: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    coverPicture: "https://images.unsplash.com/photo-1486134030336-39b1094bf33e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1607&q=80",
    link: "https://redux-toolkit.js.org/usage/usage-guide",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Animesh",
    lastName: "Parihar",
    username: "test@3",
    password: "test",
    bio: "Hi I am Animesh!",
    profilePicture: "https://images.unsplash.com/photo-1620000617482-821324eb9a14?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    coverPicture: "https://images.unsplash.com/photo-1486134030336-39b1094bf33e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1607&q=80",
    link: "https://redux-toolkit.js.org/usage/usage-guide",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Shivani",
    lastName: "Parihar",
    username: "test@4",
    password: "test",
    bio: "Hi I am Shivani!",
    profilePicture: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    coverPicture: "https://images.unsplash.com/photo-1486134030336-39b1094bf33e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1607&q=80", link: "https://redux-toolkit.js.org/usage/usage-guide",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Vidit",
    lastName: "Mehrotra",
    username: "test@5",
    password: "test",
    bio: "Hi I am Vidit!",
    profilePicture: "https://images.unsplash.com/photo-1579540252588-da0ee883560d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    coverPicture: "https://images.unsplash.com/photo-1486134030336-39b1094bf33e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1607&q=80",
    link: "https://redux-toolkit.js.org/usage/usage-guide",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
