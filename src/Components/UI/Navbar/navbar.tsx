import { Link } from "react-router-dom";
import "./navbar.scss";
const Navbar = () => {
  return (
    <div className="Navbar">
      <Link className="NavbarLink" to={"/users"}>
        Users
      </Link>
      <Link className="NavbarLink" to={"/todos"}>
        Todos
      </Link>
    </div>
  );
};

export default Navbar;
