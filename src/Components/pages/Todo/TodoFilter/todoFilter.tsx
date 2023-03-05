import { observer } from "mobx-react";
import { FC, useState } from "react";
import { store } from "../../../../Store/store";
import { ITodo } from "../../../../types/types";
import MyInput from "../../../UI/MyInput/myInput";
import MySelect from "../../../UI/MySelect/mySelect";

const TodoFilter: FC = () => {
  const [value, setValue] = useState("");
  const changeSort = (selectedSort: keyof ITodo) => {
    store.sortTodo(selectedSort);
  };
  function changeQuery(query: string) {
    const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    };
    store.searchQuery(query);
    return changeInput;
  }

  return (
    <>
      <MyInput
        placeholder="Введите запрос"
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
