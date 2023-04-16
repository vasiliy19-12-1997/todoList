import { ReactNode, useState } from "react";
import { Theme, ThemeContext } from "./context";
import { storage } from "../Components/Utils/storage";
import { changeCssRootVariables } from "../Components/Utils/changeTheme";

interface Props {
  children: ReactNode;
}

export const ThemeProvider = ({ children, ...props }: Props) => {
  const [theme, setTheme] = useState<Theme>(
    storage.getItem("themeTodo") || Theme.LIGHT
  );
  changeCssRootVariables(theme);
  const changeTheme = (theme: Theme) => {
    storage.setItem("themeTodo", theme);
    setTheme(theme);
    changeCssRootVariables(theme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        changeTheme,
      }}
      {...props}
    >
      {children}
    </ThemeContext.Provider>
  );
};
