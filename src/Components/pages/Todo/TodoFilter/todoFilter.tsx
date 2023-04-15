import { observer } from "mobx-react-lite";
import { store } from "../../../../Store/store";
import { ITodo } from "../../../../types/types";
import MyInput from "../../../UI/MyInput/myInput";
import MySelect from "../../../UI/MySelect/mySelect";

const TodoFilter = () => {
  const changeSort = (selectedSort: keyof ITodo) => {
    if (selectedSort) {
      store.changeSort(selectedSort);
    } else {
      return null;
    }
    console.log(`${store.filter.sort} работает сортировка`);
  };
  const changeQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    store.changeQuery(e);
    console.log(`${store.filter.query} работает`);
  };

  return (
    <>
      <MyInput
        placeholder="write a query..."
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
