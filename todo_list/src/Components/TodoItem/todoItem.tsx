import React, { FC } from "react";
import { IUser } from "../types/types";
import { ITodo } from "./../types/types";

interface TodoItemProps {
  todo: ITodo;
}

const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  return (
    <div>
      <input type="checkbox" checked={todo.completed}></input>
      {todo.id}. {todo.title}
    </div>
  );
};

export default TodoItem;
