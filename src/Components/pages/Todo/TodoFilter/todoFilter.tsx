import { FC } from "react";
import { ITodo } from "../../../../types/types";
import MyInput from "../../../UI/MyInput/myInput";
import MySelect from "../../../UI/MySelect/mySelect";

interface TodoFilterProps {
  filter: { sort: keyof ITodo; query: string };
  setFilter: (sort: any) => void;
}
const TodoFilter: FC<TodoFilterProps> = (props: TodoFilterProps) => {
  const { filter, setFilter } = props;
  console.log(filter.sort);

  return (
    <div>
      <MyInput
        value={filter.query}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFilter({ ...filter, query: e.target.value })
        }
      />

      <MySelect
        onChange={(selectedSort: any) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        value={filter.sort}
        options={[
          { value: "title", name: "on name" },
          { value: "completed", name: "on completed" },
          { value: "id", name: "on id" },
        ]}
      />
    </div>
  );
};

export default TodoFilter;
