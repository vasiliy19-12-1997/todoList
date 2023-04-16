import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";
import { ITodo } from "../../../../types/types";
import ServiceTodo from "../../../API/serviceTodo";
import { useFetching } from "../../../Hooks/useFetching";
import MyButton from "../../../UI/MyButton/myButton";
type TodoItemPageParams = {
  id: any;
};
const TodoItemPage: FC = () => {
  const [todo, setTodo] = useState<ITodo | null>(null);
  const params = useParams<TodoItemPageParams>();
  const navigate = useNavigate();
  const [fetching] = useFetching(async () => {
    const response: ITodo = await ServiceTodo.getTodosId(params.id);
    setTodo(response);
  });
  useEffect(() => {
    fetching();
  }, []);

  return (
    <>
      <MyButton onClick={() => navigate(`/todos`)}>Back</MyButton>

      <h1>Страница пользователя {todo?.id}</h1>
      <div>{todo?.title}</div>
      <div>
        закончена
        {todo?.completed}
      </div>
    </>
  );
};

export default TodoItemPage;
