import { observer } from "mobx-react-lite";
import React, { FC, useState } from "react";
import store from "../../../../Store/store";
import { ITodo } from "../../../../types/types";
import MyButton from "./../../../UI/MyButton/myButton";
import MyInput from "./../../../UI/MyInput/myInput";
import "./todoForm.scss";
interface TodoFormProps {
  create?: (todo: ITodo) => void;
}
const TodoForm: FC<TodoFormProps> = ({ create }) => {
  const [todo, setTodo] = useState({
    title: "",
    completed: false,
  });

  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo({ ...todo, title: e.target.value });
  };
  // console.log(store.createTodo);
  return (
    <div className="todoForm">
      <MyInput
        value={store.newTodo}
        onChange={(e) => (store.newTodo = e.target.value)}
      />
      <MyButton onClick={() => store.createTodo()}>Add TODO</MyButton>
    </div>
  );
};

export default observer(TodoForm);
