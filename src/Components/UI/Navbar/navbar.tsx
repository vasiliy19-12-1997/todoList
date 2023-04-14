import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/context";
import { IAuth } from "../../../types/types";

import MyButton from "../MyButton/myButton";
import "./navbar.scss";
import { SharedSvgSelector } from "../../Assets/Icons/Shared/sharedSvgSelector";
const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext) as IAuth;
  const LogOut = () => {
    setIsAuth(false);
    localStorage.removeItem("authTodo");
  };
  return (
    <>
      <div className="Navbar">
        <Link className="NavbarLink" to={"/users"}>
          Users
        </Link>
        <Link className="NavbarLink" to={"/todos"}>
          Todos
        </Link>

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
