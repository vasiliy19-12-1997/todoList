import { ReactNode, useState } from "react";
import { Theme, ThemeContext } from "./context";
import { storage } from "../Components/Model/storage";
import { changeCssRootVariables } from "../Components/Model/changeTheme";

interface Props {
  children: ReactNode;
}

export const ThemeProvider = ({ children, ...props }: Props) => {
  const [theme, setTheme] = useState<Theme>(
    storage.getItem("themeTodo") || Theme.LIGHT
  );
  changeCssRootVariables(theme);
  function changeTheme(theme: Theme) {
    storage.setItem("themeTodo", theme);
    setTheme(theme);
    changeCssRootVariables(theme);
  }

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
