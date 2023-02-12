import React, { FC, PropsWithChildren } from "react";
import "./myButton.scss";
interface MyButtonProps {
  onClick?: () => void;
  value?: string;
}
const MyButton: FC<PropsWithChildren<MyButtonProps>> = ({
  children,
  ...props
}) => {
  return (
    <div className="Button">
      <button className="ButtonS" {...props}>
        {children}
      </button>
    </div>
  );
};

export default MyButton;
