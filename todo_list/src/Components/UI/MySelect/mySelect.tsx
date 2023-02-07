import React, { FC } from "react";
interface MySelectProps {
  options: {};
}
const MySelect: FC<MySelectProps> = () => {
  return (
    <div>
      <select name="" id="">
        <option disabled>Sort by</option>
        <option>By title</option>
        <option>By body</option>
      </select>
    </div>
  );
};

export default MySelect;
