import React, { useState } from "react";
import "./Checkbox.scss";
import { ITodo } from "../../../types/types";
interface CheckboxProps {
  label: string;
  onClick: (todo: ITodo) => void;
}
const Checkbox = (props: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheck = () => {
    setIsChecked(!isChecked);
  };
  return (
    <label className="checkbox">
      <input type="checkbox" checked={isChecked} onClick={handleCheck} />
      <span className="checkmark"></span>
      <span className="label">{props.label}</span>
    </label>
  );
};
export default Checkbox;
