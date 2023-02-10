import React, { FC } from "react";

interface MyInputProps {
  value: string;
  onChange: (query: React.ChangeEvent<HTMLInputElement>) => void;
}
const MyInput: FC<MyInputProps> = ({ ...props }) => {
  return (
    <div>
      <input {...props} />
    </div>
  );
};

export default MyInput;
