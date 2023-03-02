import { observer } from "mobx-react-lite";
import "mobx-react-lite/batchingForReactDom";
import { useRef, useState } from "react";
import store from "../../../../Store/store";
import { ITodo } from "../../../../types/types";
import MyButton from "../../../UI/MyButton/myButton";
import MyInput from "./../../../UI/MyInput/myInput";
import "./todoItem.scss";
interface TodoItemProps {
  todo: ITodo;
  deleteTodo?: (todo: ITodo) => void;
  index: number;
}

function TodoItem(props: TodoItemProps) {
  const { todo, index } = props;
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
  const deleteTodo = (id: number) => {
    store.deleteTodo(todo.id);
  };
  return (
    <div className="Todo">
      <h3 className="TodoItemText">
        {!isEdit && index}. {!isEdit && todo.title}
      </h3>
      <div className="TodoItem">
        <input type="checkbox" onClick={ChangeCheckBox} />
        <MyButton onClick={clickEdit}>edit</MyButton>
        <MyButton onClick={() => store.deleteTodo(todo.id)}>Delete</MyButton>
      </div>
      <div className="TodoItemEdit">
        {" "}
        {isEdit && <MyInput value={a} onChange={ChangeTitle} />}
        {isEdit && (
          <MyButton value={edit} onClick={saveEdit}>
            Save
          </MyButton>
        )}
      </div>
    </div>
  );
}
export default observer(TodoItem);
