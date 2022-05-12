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
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Aniket",
    lastName: "Parihar",
    username: "test@2",
    password: "test",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Animesh",
    lastName: "Parihar",
    username: "test@3",
    password: "test",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Shivani",
    lastName: "Parihar",
    username: "test@4",
    password: "test",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "John",
    lastName: "Doe",
    username: "test@5",
    password: "test",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Vidit",
    lastName: "Mehrotra",
    username: "test@6",
    password: "test",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
