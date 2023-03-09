import { observer } from "mobx-react";
import { FC, useState } from "react";
import { store } from "../../../../Store/store";
import { ITodo } from "../../../../types/types";
import MyInput from "../../../UI/MyInput/myInput";
import MySelect from "../../../UI/MySelect/mySelect";

const TodoFilter: FC = () => {
  const changeSort = (selectedSort: keyof ITodo) => {
    store.sortTodo(selectedSort);
  };
  const changeQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    store.filter.query = e.target.value;
    store.searchQuery(e.target.value);
    console.log(`${store.filter.query} работает`);
  };

  return (
    <>
      <MyInput
        placeholder="Введите запрос"
        value={store.filter.query}
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
