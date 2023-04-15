import { observer } from "mobx-react-lite";
import { store } from "../../Store/store";

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
export default observer(List);
