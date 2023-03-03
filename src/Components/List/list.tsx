import { store } from "../../Store/store";

//мы пишем дженнерик T потому мы ожиданием массив элементов, но они могут быть любого типа
interface ListProps<T> {
  items: T[];
  tasks?: number;
  renderItem: (item: T, index: number) => React.ReactNode;
}

function List<T>(props: ListProps<T>) {
  return (
    <div>
      <div>Tasksleft:{store.unfinishedTodoCount}</div>
      {props.items.map(props.renderItem)}
    </div>
  );
}
export default List;
