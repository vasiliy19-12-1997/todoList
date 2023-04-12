import { observer } from "mobx-react-lite";
import { store } from "../../../../Store/store";
import { ITodo } from "../../../../types/types";
import MyButton from "../../../UI/MyButton/myButton";
import "./todoItem.scss";
import { useState } from "react";
import MyInput from "./../../../UI/MyInput/myInput";
interface TodoItemProps {
  todo: ITodo;
  index: number;
  deleteTodo?: (id: number) => void;
}

function TodoItem(props: TodoItemProps) {
  const { todo, index } = props;

  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState(todo.title);

  const clickEdit = () => {
    if (isEdit) {
      setIsEdit(false);
      console.log(isEdit);
    } else {
      setIsEdit(true);
      console.log(isEdit);
    }
  };
  const changeEditTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const saveEdit = () => {
    store.saveEdit(todo, value);
    setIsEdit(false);
  };
  return (
    <div className="Todo">
      <h3 className="TodoItemText">
        {index}. {todo.title}
      </h3>
      <div className="TodoItem">
        <input type="checkbox" onClick={() => store.toggle(todo)} />
        <MyButton onClick={clickEdit}>Edit</MyButton>
        <MyButton onClick={() => store.deleteTodo(todo.id)}>Delete</MyButton>
      </div>
      <div className="TodoItemEdit ">
        {isEdit && <MyInput value={value} onChange={changeEditTitle} />}
        {isEdit && (
          <MyButton value={value} onClick={saveEdit}>
            Save
          </MyButton>
        )}
      </div>
    </div>
  );
}
export default observer(TodoItem);
