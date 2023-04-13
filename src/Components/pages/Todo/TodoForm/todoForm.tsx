import { observer } from "mobx-react";
import { FC, useState } from "react";
import { store } from "../../../../Store/store";

import MyButton from "./../../../UI/MyButton/myButton";
import MyInput from "./../../../UI/MyInput/myInput";

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
      <MyInput value={todo} onChange={changeInput} />
      <MyButton onClick={createTodo}>Add TODO</MyButton>
    </>
  );
};

export default observer(TodoForm);
