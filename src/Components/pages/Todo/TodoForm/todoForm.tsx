import { observer } from "mobx-react";
import React, { FC, useState } from "react";

import { ITodo } from "../../../../types/types";
import MyButton from "./../../../UI/MyButton/myButton";
import MyInput from "./../../../UI/MyInput/myInput";
import "./todoForm.scss";
import "mobx-react-lite/batchingForReactDom";
import store from "../../../../Store/store";
interface TodoFormProps {
  create?: (todo: ITodo) => void;
}
const TodoForm: FC<TodoFormProps> = ({ create }) => {
  // const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setTodo({ ...todo, title: e.target.value });
  // };
  // console.log(store.createTodo);

  return (
    <div className="todoForm">
      <MyInput
        value={store.todo}
        onChange={(e) => (store.todo = e.target.value)}
      />
      <MyButton onClick={() => store.createTodo()}>Add TODO</MyButton>
    </div>
  );
};

export default observer(TodoForm);
