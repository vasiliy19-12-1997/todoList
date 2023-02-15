import { useRef, useState } from "react";
import { ITodo } from "../../../../types/types";
import MyButton from "../../../UI/MyButton/myButton";
import MyInput from "./../../../UI/MyInput/myInput";
import "./todoItem.scss";
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
    <div className="TodoItem">
      <div className="TodoItemBut">
        <input type="checkbox" onClick={ChangeCheckBox} />
        <MyButton onClick={clickEdit}>edit</MyButton>
        <MyButton onClick={() => deleteTodo(todo)}>Delete</MyButton>
      </div>

      {isEdit && <MyInput value={a} onChange={ChangeTitle} />}
      {isEdit && (
        <MyButton value={edit} onClick={saveEdit}>
          Save
        </MyButton>
      )}

      <div className="TodoItemText">{!isEdit && todo.title}</div>
    </div>
  );
}
