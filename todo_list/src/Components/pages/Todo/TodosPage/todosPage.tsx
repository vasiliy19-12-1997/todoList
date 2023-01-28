import axios from "axios";
import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import List from "../../../List/list";
import { ITodo } from "../../../types/types";
import TodoItem from "../TodoItem/todoItem";

const TodosPage: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetchTodos();
  }, []);
  const fetchTodos = async (limit = 15) => {
    try {
      const response = await axios.get<ITodo[]>(
        "https://jsonplaceholder.typicode.com/todos",
        {
          params: {
            _limit: limit,
          },
        }
      );
      setTodos(response.data);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <button onClick={() => navigate(`/users`)}>Users</button>
      <List
        items={todos}
        renderItem={(todo: ITodo) => (
          <TodoItem
            onClick={(todo) => navigate("/todos/" + todo.id)}
            key={todo.id}
            todo={todo}
          />
        )}
      />
    </div>
  );
};

export default TodosPage;
