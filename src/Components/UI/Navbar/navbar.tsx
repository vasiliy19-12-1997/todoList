import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/context";
import "./navbar.scss";
import { useContext } from "react";
import { Auth } from "../../../types/types";
import MyButton from "../MyButton/myButton";
import Login from "../../pages/Todo/Login/login";
const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext) as Auth;
  const logOut = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };
  return (
    <div>
      <div className="Navbar">
        <Link className="NavbarLink" to={"/users"}>
          Users
        </Link>
        <Link className="NavbarLink" to={"/todos"}>
          Todos
        </Link>
      </div>
      {isAuth && <MyButton onClick={logOut}>LogOut</MyButton>}
    </div>
  );
};

export default Navbar;
