import { FC, PropsWithChildren } from "react";
import "./loader.scss";
const Loader: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <h2 className="H">{children}</h2>
    </>
  );
};

export default Loader;
