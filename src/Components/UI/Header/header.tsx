import React, { FC, PropsWithChildren } from "react";
import "./header.scss";
const Header: FC<PropsWithChildren> = ({ children, ...props }) => {
  return (
    <div className="Header">
      <h1 className="HeaderH" {...props}>
        {children}
      </h1>
    </div>
  );
};

export default Header;
