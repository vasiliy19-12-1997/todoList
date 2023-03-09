import { observer } from "mobx-react";
import { FC, useState } from "react";
import { store } from "../../../../Store/store";

import MyButton from "./../../../UI/MyButton/myButton";
import MyInput from "./../../../UI/MyInput/myInput";

const TodoForm: FC = () => {
  // console.log(store.createTodo);
  const [todo, setTodo] = useState("");
  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };
  return (
    <>
      <MyInput value={todo} onChange={changeInput} />
      <MyButton onClick={() => store.createTodo(todo)}>Add TODO</MyButton>
    </>
  );
};

export default observer(TodoForm);
