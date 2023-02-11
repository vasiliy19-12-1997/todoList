import { ITodo } from "../../../../types/types";
import { useRef, useState } from "react";
import MyInput from "./../../../UI/MyInput/myInput";
import MyInputCheckBox from "./../../../UI/MyInput/myInputCheckBox";
import { channel } from "diagnostics_channel";

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
    setEdit((todo.title = edit));
    setIsEdit(false);
  };

  return (
    <div>
      <button onClick={() => deleteTodo(todo)}>Delete</button>
      <input type="checkbox" onClick={ChangeCheckBox} />
      {/* <MyInputCheckBox
        ref={check}
        value={checked}
        onChange={ChangeCheckBox}
        onClick={ClickCheckBox}
        checked={todo.completed}
      ></MyInputCheckBox> */}
      <button onClick={clickEdit}>edit</button>
      {isEdit && <input value={edit} onChange={ChangeTitle} />}
      {isEdit && (
        <button value={edit} onClick={saveEdit}>
          Save
        </button>
      )}
      {isEdit}
      {!isEdit && todo.title}
    </div>
  );
}
