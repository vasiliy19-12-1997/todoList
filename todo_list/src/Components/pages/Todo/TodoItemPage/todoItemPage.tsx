import axios from "axios";
import { FC, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { ITodo } from "../../../types/types";

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
      <button onClick={() => navigate(`/todos`)}>Back</button>

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
