<<<<<<< HEAD
<<<<<<< HEAD:todo_list/src/Components/List/list.tsx
import React, { FC } from "react";
=======
//мы пишем дженнерик T потому мы ожиданием массив элементов, но они могут быть любого типа
>>>>>>> develop:src/Components/List/list.tsx
=======
import { store } from "../../Store/store";

//тип T дает нам отрисовывать любые типы массивов(todos, users...)
>>>>>>> MobX
interface ListProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
}
<<<<<<< HEAD
export default function List<T>(props: ListProps<T>) {
  return <div>{props.items.map(props.renderItem)}</div>;
=======

function List<T>(props: ListProps<T>) {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        Tasks left: {store.unfinishedTodoCount}
      </div>
      {props.items.map(props.renderItem)}
    </>
  );
>>>>>>> MobX
}
export default List;
