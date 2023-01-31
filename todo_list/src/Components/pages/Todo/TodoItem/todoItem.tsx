import { FC } from "react";
import { ITodo } from "../../../../types/types";

interface TodoItemProps {
  todo: ITodo;
  onClick: (todo: ITodo) => void;
}

const TodoItem: FC<TodoItemProps> = ({ todo, onClick }) => {
  return (
    <div onClick={() => onClick(todo)}>
      <input type="checkbox" checked={todo.completed}></input>
      {todo.id}. {todo.title}
    </div>
  );
};

export default TodoItem;
