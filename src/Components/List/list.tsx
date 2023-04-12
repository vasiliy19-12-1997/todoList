//мы пишем дженнерик T потому мы ожиданием массив элементов, но они могут быть любого типа
import { store } from "../../Store/store";

//тип T дает нам отрисовывать любые типы массивов(todos, users...)
interface ListProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
}

function List<T>(props: ListProps<T>) {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        Tasks left: {store.unfinishedTodoCount}
      </div>
      {props.items.map(props.renderItem)}
    </>
  );
}
export default List;
