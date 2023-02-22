import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/context";
import "./navbar.scss";
import { useContext } from "react";
import { Auth } from "../../../types/types";
import MyButton from "../MyButton/myButton";
import Login from "../../pages/Todo/Login/login";
const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext) as Auth;
  const LogOut = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
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
      </div>
      {isAuth && <MyButton onClick={LogOut}>Log Out</MyButton>}
    </>
  );
};

export default Navbar;
