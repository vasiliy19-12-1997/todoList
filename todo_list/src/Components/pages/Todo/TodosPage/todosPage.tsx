import axios from "axios";
import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import List from "../../../List/list";
import { ITodo } from "../../../../types/types";
import TodoItem from "../TodoItem/todoItem";
import TodoForm from "../TodoForm/todoForm";

const TodosPage: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const navigate = useNavigate();

  const deleteTodo = (todo: ITodo) => {
    setTodos([...todos].filter((t) => t?.id !== todo?.id));
  };
  const createTodo = (newTask: ITodo) => {
    setTodos([...todos, newTask]);
  };

  useEffect(() => {
    fetching();
  }, []);

  const fetchTodos = async (limit = 10) => {
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
      <TodoForm create={createTodo} />
      <List
        items={todos}
        renderItem={(todo: ITodo) => (
          <TodoItem deleteTodo={deleteTodo} key={todo.id} todo={todo} />
        )}
      />
    </div>
  );
};

export default TodosPage;
