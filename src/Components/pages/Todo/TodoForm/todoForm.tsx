import React, { FC, useEffect, useState } from "react";
import { ITodo } from "../../../../types/types";
import "./todoForm.scss";
import MyInput from "./../../../UI/MyInput/myInput";
import MyButton from "./../../../UI/MyButton/myButton";
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
    // localStorage.setItem("todos", JSON.stringify(newTask));
  };
  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo({ ...todo, title: e.target.value });
  };

  return (
    <div className="todoForm">
      <MyInput value={todo.title} onChange={changeInput} />
      <MyButton onClick={addTodo}>Add TODO</MyButton>
    </div>
  );
};

export default TodoForm;
