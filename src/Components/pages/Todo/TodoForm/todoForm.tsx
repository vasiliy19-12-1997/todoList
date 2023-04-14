import { observer } from "mobx-react";
import { FC, useState } from "react";
import { store } from "../../../../Store/store";

import MyButton from "./../../../UI/MyButton/myButton";
import MyInput from "./../../../UI/MyInput/myInput";
import { SharedSvgSelector } from "../../../Assets/Icons/Shared/sharedSvgSelector";

const TodoForm: FC = () => {
  const [todo, setTodo] = useState("");
  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
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
      />
      <MyButton onClick={createTodo}>
        <SharedSvgSelector id="addTodo" />
      </MyButton>
    </>
  );
};

export default observer(TodoForm);
