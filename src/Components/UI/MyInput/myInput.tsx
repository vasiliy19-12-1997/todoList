import React, { FC } from "react";
import "./myInput.scss";
interface MyInputProps {
  value: string;
  onChange: (query: React.ChangeEvent<HTMLInputElement>) => void;
}

const MyInput: FC<MyInputProps> = ({ ...props }) => {
  return (
    <div className="Input">
      <input className="InputI" {...props} />
    </div>
  );
};

export default MyInput;
