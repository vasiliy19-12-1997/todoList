import React, { FC } from "react";
import { Link } from "react-router-dom";

const Navbar: FC = () => {
  return (
    <div>
      <Link to={"/users"}></Link>
      <Link to={"/todos"}></Link>
    </div>
  );
};

export default Navbar;
