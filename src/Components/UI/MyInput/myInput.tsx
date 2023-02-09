import React, { FC } from "react";

const MyInput: FC = ({ ...props }) => {
  return (
    <div>
      <input {...props} />
    </div>
  );
};

export default MyInput;
