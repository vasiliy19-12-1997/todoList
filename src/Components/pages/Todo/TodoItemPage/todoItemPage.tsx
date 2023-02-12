import axios from "axios";
import { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { ITodo } from "../../../../types/types";
import MyButton from "../../../UI/MyButton/myButton";

type TodoItemPageParams = {
  id: string;
};
const TodoItemPage: FC = () => {
  const [todo, setTodo] = useState<ITodo | null>(null);
  const params = useParams<TodoItemPageParams>();
  const navigate = useNavigate();
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get<ITodo>(
        "https://jsonplaceholder.typicode.com/todos/" + params.id
      );
      setTodo(response.data);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <MyButton onClick={() => navigate(`/todos`)}>Back</MyButton>

      <h1>Страница пользователя {todo?.id}</h1>
      <div>{todo?.title}</div>
      <div>
        закончена
        {todo?.completed}
      </div>
    </div>
  );
};

export default TodoItemPage;
