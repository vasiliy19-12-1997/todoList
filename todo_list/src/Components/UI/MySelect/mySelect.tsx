import React, { FC } from "react";
import { ITodo } from "../../../types/types";
interface MySelectProps {
  options: { value: string; name: string }[];
  value: string;
  onChange: (sort: any) => void;
}
const MySelect: FC<MySelectProps> = (props: MySelectProps) => {
  const { options, value, onChange } = props;
  return (
    <div>
      <select onChange={(e) => onChange(e.target.value)} value={value}>
        <option disabled>Sort by</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MySelect;
