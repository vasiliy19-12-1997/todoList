import { ITodo } from "../../../../types/types";
import { useRef, useState } from "react";
import MyInput from "./../../../UI/MyInput/myInput";
import MyInputCheckBox from "./../../../UI/MyInput/myInputCheckBox";
import { channel } from "diagnostics_channel";
import MyButton from "../../../UI/MyButton/myButton";

interface TodoItemProps {
  todo: ITodo;
  deleteTodo: (todo: ITodo) => void;
  index: number;
}

export default function TodoItem(props: TodoItemProps) {
  const { todo, deleteTodo, index } = props;
  const [isChecked, setIsChecked] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [edit, setEdit] = useState("");

  const check = useRef("");
  let a = edit;
  const ChangeCheckBox = (e: React.FormEvent<HTMLInputElement>) => {
    if (isChecked) {
      setIsChecked((todo.completed = false));
    } else {
      setIsChecked((todo.completed = true));
    }
  };
  const ChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEdit(e.target.value);
  };

  const clickEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isEdit) {
      setIsEdit(false);
    } else {
      setIsEdit(true);
    }
  };
  console.log(isEdit);
  const saveEdit = () => {
    todo.title = edit;
    a = todo.title;
    setEdit((a = edit));
    setIsEdit(false);
  };

  return (
    <div>
      <MyButton onClick={() => deleteTodo(todo)}>Delete</MyButton>
      <input type="checkbox" onClick={ChangeCheckBox} />
      {/* <MyInputCheckBox
        ref={check}
        value={checked}
        onChange={ChangeCheckBox}
        onClick={ClickCheckBox}
        checked={todo.completed}
      ></MyInputCheckBox> */}
      <button onClick={clickEdit}>edit</button>
      {isEdit && <MyInput value={a} onChange={ChangeTitle} />}
      {isEdit && (
        <MyButton value={edit} onClick={saveEdit}>
          Save
        </MyButton>
      )}
      {!isEdit && todo.title}
    </div>
  );
}
