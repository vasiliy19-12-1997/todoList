import { FC, useState } from "react";
import { store } from "../../../../Store/store";
import { ITodo } from "../../../../types/types";
import MyInput from "../../../UI/MyInput/myInput";
import MySelect from "../../../UI/MySelect/mySelect";
export interface SortAndQuery {
  sort: keyof ITodo;
  query: string;
}
export interface IFilter {
  filter: SortAndQuery;
}
const TodoFilter: FC = () => {
  const [sortTodo, setSortTodo] = useState<any>();
  const changeSort = (selectedSort: keyof ITodo) => {
    store.sortTodo(selectedSort);
  };
  return (
    <>
      {/* <MyInput
        placeholder="Поиск по сайту"
        value={filter.query}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFilter({ ...filter, query: e.target.value })
        }
      /> */}

      <MySelect
        onChange={changeSort}
        value={sortTodo}
        options={[
          { value: "title", name: "on name" },
          { value: "completed", name: "on completed" },
          { value: "id", name: "on id" },
        ]}
      />
    </>
  );
};

export default TodoFilter;
