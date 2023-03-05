import { observer } from "mobx-react";
import { FC } from "react";
import { store } from "../../../../Store/store";
import { ITodo } from "../../../../types/types";
import MySelect from "../../../UI/MySelect/mySelect";

const TodoFilter: FC = () => {
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
