import { useState } from "react";
import { store } from "../../../../Store/store";
import { ITodo } from "../../../../types/types";
import { SharedSvgSelector } from "../../../Assets/Icons/Shared/sharedSvgSelector";
import MyButton from "../../../UI/MyButton/myButton";
import MyInput from "./../../../UI/MyInput/myInput";
import "./todoItem.scss";
import { observer } from "mobx-react-lite";
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
        <div className="custom-checkbox">
          <label className="checkbox">
            <input type="checkbox" onClick={() => store.toggle(todo)} />
            <span className="checkmark"></span>
            <span className="label"></span>
          </label>
        </div>
        <MyButton onClick={clickEdit}>
          <SharedSvgSelector id="edit" />
        </MyButton>
        <MyButton onClick={() => store.deleteTodo(todo.id)}>
          <SharedSvgSelector id="trash" />
        </MyButton>
      </div>
      <div className="TodoItemEdit ">
        {isEdit && <MyInput value={value} onChange={changeEditTitle}></MyInput>}
        {isEdit && (
          <MyButton value={value} onClick={saveEdit}>
            <SharedSvgSelector id="save" />
          </MyButton>
        )}
      </div>
    </div>
  );
}
export default observer(TodoItem);
