import React, { FC } from "react";
import { ITodo } from "../../../types/types";
interface MySelectProps {
  options: { value: string; name: string }[];
  value: { sort: string };
  onChange: (sort: any) => void;
}
const MySelect: FC<MySelectProps> = (props: MySelectProps) => {
  const { options, value, onChange } = props;
  return (
    <div>
      <select onChange={(e) => onChange(e.target.value)} value={value.sort}>
        <option disabled>Sort by</option>
        {options.map((option) => (
          <option value={option.value}>{option.name}</option>
        ))}
      </select>
    </div>
  );
};

export default MySelect;
