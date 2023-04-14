import { FC, useState } from "react";
import { store } from "../../../../Store/store";
import { ITodo } from "../../../../types/types";
import MyInput from "../../../UI/MyInput/myInput";
import MySelect from "../../../UI/MySelect/mySelect";
import { observer } from "mobx-react-lite";

const TodoFilter: FC = () => {
  const [value, setValue] = useState("");
  const changeSort = (selectedSort: keyof ITodo) => {
    store.sortTodo(selectedSort);
  };
  const changeQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    store.getSearchQuery(value);
    setValue(value);
    console.log(`${store.filter.query} работает`);
  };

  return (
    <>
      <MyInput
        placeholder="write a query..."
        value={value}
        onChange={changeQuery}
      />

      <MySelect
        onChange={changeSort}
        value={store.filter.sort}
        options={[
          { value: "title", name: "on name" },
          { value: "completed", name: "on completed" },
          { value: "id", name: "on id" },
        ]}
      />
    </>
  );
};

export default observer(TodoFilter);
