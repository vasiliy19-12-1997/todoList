import { createContext } from "react";
import { IAuth } from "../types/types";

export const AuthContext = createContext<IAuth | null>(null);
if (!AuthContext) {
  throw new Error("Context should be defined!");
}
