import { FC, useState } from "react";
import { store } from "../../../../Store/store";

import { SharedSvgSelector } from "../../../Assets/Icons/Shared/sharedSvgSelector";
import MyButton from "./../../../UI/MyButton/myButton";
import MyInput from "./../../../UI/MyInput/myInput";
import { observer } from "mobx-react-lite";

const TodoForm: FC = () => {
  const [todo, setTodo] = useState("");
  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };
  const createTodoPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
      store.createTodo(todo);
    } else {
      return null;
    }
    setTodo("");
  };
  const createTodo = () => {
    store.createTodo(todo);
    setTodo("");
  };
  return (
    <>
      <MyInput
        placeholder="write something..."
        value={todo}
        onChange={changeInput}
        onKeyPress={createTodoPress}
      />
      <MyButton onClick={createTodo}>
        <SharedSvgSelector id="addTodo" />
      </MyButton>
    </>
  );
};

export default observer(TodoForm);
