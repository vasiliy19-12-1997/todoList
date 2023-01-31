import { FC } from "react";
import { ITodo } from "../../../../types/types";

interface TodoItemProps<T> {
  todo: ITodo;
  onClick: (todo: ITodo) => void;
  items:T[]

}

const TodoItem: FC<T> = ({ todo, onClick }:TodoItemProps<T>) => {
  return (
    <div onClick={() => onClick(todo)}>
      <button onClick={()=>}></button>
      <input type="checkbox" checked={todo.completed}></input>
      {todo.id}. {todo.title}
    </div>
  );
};

export default TodoItem;
