import React, { FC, useState } from "react";
import { ITodo } from "../../../../types/types";

interface TodoFormProps {
  create: (todo: ITodo) => void;
}
const TodoForm: FC<TodoFormProps> = ({ create }) => {
  const [todo, setTodo] = useState({
    title: "",
    completed: false,
  });
  const addTodo = () => {
    const newTask = {
      ...todo,
      id: Math.random(),
    };
    create(newTask);
  };
  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo({ ...todo, title: e.target.value });
  };

  return (
    <div>
      <input type="text" value={todo.title} onChange={changeInput} />
      <button onClick={addTodo}>Add TODO</button>
    </div>
  );
};

export default TodoForm;
