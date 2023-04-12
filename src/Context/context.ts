import { createContext } from "react";
import { IAuth } from "../types/types";

export const AuthContext = createContext<IAuth | null>(null);
if (!AuthContext) {
  throw new Error("Context should be defined!");
}

interface Props {
  theme: Theme;
  changeTheme: (theme: Theme) => void;
}

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

export const ThemeContext = createContext<Props>({
  theme: Theme.LIGHT,
  changeTheme: () => {},
});
