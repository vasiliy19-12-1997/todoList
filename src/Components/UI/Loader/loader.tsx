import { FC, PropsWithChildren } from "react";
import "./loader.scss";
const Loader: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="Loader">
      <h2 className="LoaderH">{children}</h2>
    </div>
  );
};

export default Loader;
