import { createContext, useState } from "react";
import { Auth } from "../types/types";
import { ITodo } from "./../types/types";

export const AuthContext = createContext<Auth | null>(null);
if (!AuthContext) {
  throw new Error("Context should be defined!");
}
