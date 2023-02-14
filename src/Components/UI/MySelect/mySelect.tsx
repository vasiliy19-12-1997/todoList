import { FC } from "react";
import { ITodo } from "../../../types/types";
interface MySelectProps<T> {
  options: { value: string; name: string }[];
  value: string;
  onChange: (sort: any) => void;
}
export default function MySelect<T>(props: MySelectProps<T>) {
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
}
