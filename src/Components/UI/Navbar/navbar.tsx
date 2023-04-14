import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext, Theme } from "../../../Context/context";
import { IAuth } from "../../../types/types";

import MyButton from "../MyButton/myButton";
import "./navbar.scss";
import { SharedSvgSelector } from "../../Assets/Icons/Shared/sharedSvgSelector";
import { useTheme } from "../../Hooks/useTheme";
const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext) as IAuth;
  const LogOut = () => {
    setIsAuth(false);
    localStorage.removeItem("authTodo");
  };
  const theme = useTheme();
  const [active, setActive] = useState(true);
  function changeTheme() {
    theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
    setActive(!active);
  }
  return (
    <>
      <div className="Navbar">
        <Link className="NavbarLink" to={"/users"}>
          Users
        </Link>
        <Link className="NavbarLink" to={"/todos"}>
          Todos
        </Link>
        <div className="change-theme" onClick={changeTheme}>
          <SharedSvgSelector id={`${active ? "light-theme" : "night-theme"}`} />
        </div>

        {isAuth && (
          <MyButton onClick={LogOut}>
            <SharedSvgSelector id="logOut" />
          </MyButton>
        )}
      </div>
    </>
  );
};

export default Navbar;
