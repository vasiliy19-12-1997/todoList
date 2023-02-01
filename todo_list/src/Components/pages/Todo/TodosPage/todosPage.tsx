import axios from "axios";
import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import List from "../../../List/list";
import { ITodo } from "../../../../types/types";
import TodoItem from "../TodoItem/todoItem";

const TodosPage: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([
    { title: "", id: Math.random(), completed: false },
  ]);
  const [value, setValue] = useState("");

  const navigate = useNavigate();
  const deleteTodo = (todo: ITodo) => {
    setTodos([...todos].filter((t) => t?.id !== todo?.id));
  };
  const addTodo = () => {
    const newTask = {
      ...todos,
      id: Math.random(),
    };
    setTodos([...todos, newTask]);
  };
  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  console.log(value);

  useEffect(() => {
    fetchTodos();
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
      <input type="text" value={value} onChange={changeInput} />
      <button onClick={() => navigate(`/users`)}>Users</button>
      <button onClick={addTodo} />
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
