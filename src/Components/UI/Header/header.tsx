import { FC, PropsWithChildren } from "react";
import "./header.scss";
const Header: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <h1 className="H">{children}</h1>
    </>
  );
};

export default Header;
