import React, { FC, PropsWithChildren, useState } from "react";
import "./header.scss";
import { useTheme } from "../../Hooks/useTheme";
import { Theme } from "../../../Context/context";
import { SharedSvgSelector } from "../../Assets/Icons/Shared/sharedSvgSelector";
const Header: FC<PropsWithChildren> = ({ children }) => {
  const theme = useTheme();
  const [active, setActive] = useState(true);
  function changeTheme() {
    theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
    setActive(!active);
  }
  return (
    <>
      <div className="change-theme" onClick={changeTheme}>
        <SharedSvgSelector id={`${active ? "light-theme" : "night-theme"}`} />
      </div>
      <h1 className="H">{children}</h1>
    </>
  );
};

export default Header;
