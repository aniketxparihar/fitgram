import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  { 
    _id: "32f2c270-6733-48ad-a416-846b5f2925a9",
    user_id:"4485af0a- 4e48 - 484b - a238 - 20ef2e9a6643",
    content:"Hi this is Claire and this is my first post",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "test@1",
    firstName: "Claire",
    lastName: "Dunphey",
    profilePicture: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1961&q=80",
    media:"https://images.unsplash.com/photo-1534141458084-6802f79e8717?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=411&q=80",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "5e1f1b47-a0c5-41ef-9aee-21d36d2ba24f",
    user_id: "4485af0a- 4e48 - 484b - a238 - 20ef2e9a6643",
    content: "Archery is my First Love",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "test@1",
    firstName: "Claire",
    lastName: "Dunphey",
    profilePicture: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1961&q=80",
    media: "https://images.unsplash.com/photo-1510925758641-869d353cecc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "b6236e1b-91fe-4289-9758-22219ba7ea06",
    user_id: "4485af0a- 4e48 - 484b - a238 - 20ef2e9a6643",
    content: "It's all about the correct posture in Archery",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "test@1",
    firstName: "Claire",
    lastName: "Dunphey",
    profilePicture: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1961&q=80",
    media: "https://images.unsplash.com/photo-1622052416859-d274b64c31f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
   {
     _id: "6109f073-79a8-4735-9e84-a22f7c544cee",
     user_id: "950b86eb-9da7-4250-aad9-c385fc362a60",
    content:
      "Hi this is Aniket and this is my first post",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
     },
    comments: [],
    username: "test@2",
    firstName: "Aniket",
    lastName: "Parihar",
    profilePicture: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
     media: "https://images.unsplash.com/photo-1526889588514-2e695856df85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "b6236e1b-91fe-4289-9758-22219ba7ea06",
    user_id: "950b86eb-9da7-4250-aad9-c385fc362a60",
    content:
      "I have been boxing since my 6th Standard",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "test@2",
    firstName: "Aniket",
    lastName: "Parihar",
    profilePicture: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    media: "https://images.unsplash.com/photo-1495046024427-c8efd65f3d7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
 
  {
    _id: "5e1f1b47-a0c5-41ef-9aee-21d36d2ba24f",
    user_id: "950b86eb-9da7-4250-aad9-c385fc362a60",
    content:
      "Being fit is not an option, it's a responsibility towards your body!",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "test@2",
    firstName: "Aniket",
    lastName: "Parihar",
    profilePicture: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    media: "https://images.unsplash.com/photo-1589579234083-e364ef7b8592?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "32f2c270-6733-48ad-a416-846b5f2925a9",
    user_id: "950b86eb-9da7-4250-aad9-c385fc362a60",
    content:
      "Fitness isn't found in the gym. Look for it in the Kitchen",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "test@2",
    firstName: "Aniket",
    lastName: "Parihar",
    profilePicture: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    media: "https://images.unsplash.com/photo-1561043433-aaf687c4cf04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  
 
];
