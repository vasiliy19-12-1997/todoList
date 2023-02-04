import { ITodo } from "../../../../types/types";

interface TodoItemProps {
  todo: ITodo;
  deleteTodo: (todo: ITodo) => void;
}

export default function TodoItem(props: TodoItemProps) {
  const { todo, deleteTodo } = props;
  const ChangeCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {};
  return (
    <div>
      <button onClick={() => deleteTodo(todo)}>Delete</button>
      <input
        onChange={ChangeCheckBox}
        type="checkbox"
        checked={props.todo.completed}
      ></input>
      {props.todo.id}. {props.todo.title}
    </div>
  );
}
