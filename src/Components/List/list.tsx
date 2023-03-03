import store from "../../Store/store";
import { ITodo } from "../../types/types";

//мы пишем дженнерик T потому мы ожиданием массив элементов, но они могут быть любого типа
interface ListProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  tasksLeft?: number;
}

function List<T>(props: ListProps<T>) {
  return (
    <div>
      {/* <div> tasksLeft:{store.completedTodoCount}</div> */}
      {props.items.map(props.renderItem)}
    </div>
  );
}
export default List;
