import React, { FC, useSyncExternalStore } from "react";
import { ITodo } from "../../../../types/types";
import MyInput from "../../../UI/MyInput/myInput";
import MySelect from "../../../UI/MySelect/mySelect";

interface TodoFilterProps {
  filter: ITodo[];
  setFilter: {};
}
const TodoFilter: FC<TodoFilterProps> = ({ filter, setFilter }) => {
  return (
    <div>
      <MyInput />

      <MySelect
        options={[
          { value: "title", name: "on name" },
          { value: "completed", name: "on completed" },
        ]}
      />
    </div>
  );
};

export default TodoFilter;
