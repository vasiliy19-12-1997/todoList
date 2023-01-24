import React, { FC } from "react";
import { IUser } from "../types/types";
import UserItem from "../UserItem/userItem";
//мы пишем дженнерик T потому мы ожиданием массив элементов, но они могут быть любого типа
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

export default function List<T>(props: ListProps<T>) {
  return <div>{props.items.map(props.renderItem)}</div>;
}
