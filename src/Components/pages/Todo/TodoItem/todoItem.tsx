import { observer } from "mobx-react-lite";
import "mobx-react-lite/batchingForReactDom";
import { useRef, useState } from "react";
import store from "../../../../Store/store";
import { ITodo } from "../../../../types/types";
import MyButton from "../../../UI/MyButton/myButton";
import MyInput from "../../../UI/MyInput/myInput";
import "./todoItem.scss";
interface TodoItemProps {
  todo: ITodo;
  index: number;
  deleteTodo?: (id: number) => void;
  tasks?: number;
}

function TodoItem(props: TodoItemProps) {
  const { todo, index } = props;

  return (
    <div className="Todo">
      <h3 className="TodoItemText">{todo.title}</h3>
      <div className="TodoItem">
        <div> tasksLeft:{store.completedTodoCount}</div>
        <input
          type="checkbox"
          onClick={() => store.toggle()}
          checked={store.completed}
        />

        <MyButton onClick={() => store.deleteTodo(todo.id)}>Delete</MyButton>
      </div>
    </div>
  );
}
export default observer(TodoItem);
