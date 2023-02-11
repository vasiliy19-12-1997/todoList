import React, { FC } from "react";
interface MyInputCheckBoxProps {
  value: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

  checked: boolean;
  onClick: (e: React.MouseEventHandler) => void;
  ref: string;
}
const MyInputCheckBox: FC<MyInputCheckBoxProps> = () => {
  return <div></div>;
};

export default MyInputCheckBox;
