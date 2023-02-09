import React, { FC, PropsWithChildren } from "react";
interface MyButtonProps {
  onClick?: () => void;
}
const MyButton: FC<PropsWithChildren<MyButtonProps>> = ({
  children,
  ...props
}) => {
  return (
    <div>
      <button {...props}>{children}</button>
    </div>
  );
};

export default MyButton;
