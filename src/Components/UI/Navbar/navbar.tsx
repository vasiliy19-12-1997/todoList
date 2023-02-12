import React, { FC } from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";
const Navbar: FC = () => {
  return (
    <div className="Navbar">
      <Link className="NavbarLink" to={"/users"}>
        Users
      </Link>
      <Link to={"/todos"}>Todos</Link>
    </div>
  );
};

export default Navbar;
