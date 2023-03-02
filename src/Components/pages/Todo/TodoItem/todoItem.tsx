import { observer } from "mobx-react-lite";
import "mobx-react-lite/batchingForReactDom";
import store from "../../../../Store/store";
import { ITodo } from "../../../../types/types";
import MyButton from "../../../UI/MyButton/myButton";
import "./todoItem.scss";
interface TodoItemProps {
  todo: ITodo;
  index: number;
  deleteTodo?: (id: number) => void;
}

function TodoItem(props: TodoItemProps) {
  const { todo, index } = props;

  return (
    <div className="Todo">
      <div className="TodoItemText">
        <h3>{todo.title}</h3>
      </div>

      <div className="TodoItem">
        <MyButton onClick={() => store.deleteTodo(todo.id)}>Delete</MyButton>
      </div>
    </div>
  );
}
export default observer(TodoItem);
