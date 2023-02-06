import { ITodo } from "../../../../types/types";

interface TodoItemProps {
  todo: ITodo;
  deleteTodo: (todo: ITodo) => void;
  index: number;
}

export default function TodoItem(props: TodoItemProps) {
  const { todo, deleteTodo, index } = props;
  const ChangeCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {};
  return (
    <div>
      <button onClick={() => deleteTodo(todo)}>Delete</button>
      <input
        onChange={ChangeCheckBox}
        type="checkbox"
        checked={todo.completed}
      ></input>
      {index}. {todo.title}
    </div>
  );
}
