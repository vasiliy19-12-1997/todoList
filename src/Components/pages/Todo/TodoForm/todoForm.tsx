import { observer } from "mobx-react";
import { FC, useState } from "react";
import { store } from "../../../../Store/store";

import { ITodo } from "../../../../types/types";
import MyButton from "./../../../UI/MyButton/myButton";
import MyInput from "./../../../UI/MyInput/myInput";

const TodoForm: FC = () => {
  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };
  // console.log(store.createTodo);
  const [todo, setTodo] = useState("");

  return (
    <>
      <MyInput value={todo} onChange={changeInput} />
      <MyButton onClick={() => store.createTodo(todo)}>Add TODO</MyButton>
    </>
  );
};

export default observer(TodoForm);
