//мы пишем дженнерик T потому мы ожиданием массив элементов, но они могут быть любого типа
interface ListProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
}

function List<T>(props: ListProps<T>) {
  return <div>{props.items.map(props.renderItem)}</div>;
}
export default List;
