import { useContext } from "react";
import { ThemeContext } from "../../Context/context";

export const useTheme = () => useContext(ThemeContext);
