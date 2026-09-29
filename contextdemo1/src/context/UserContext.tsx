import { createContext } from "react";
import {type} from 'react'

export type User = {
  name: string;
  role: string;
  department: string;
};

export const UserContext =
  createContext<User>({
    name: "Guest",
    role: "Guest",
    department: "Unknown"
  });