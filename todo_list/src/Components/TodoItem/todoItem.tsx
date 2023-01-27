import React, { FC } from "react";
import { ITodo } from "../types/types";

export interface TodoItemProps {
  todo: ITodo;
}

const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  return (
    <div>
      {todo.id} и {todo.userId}. {todo.title} завершено {todo.completed}
    </div>
  );
};

export default TodoItem;
