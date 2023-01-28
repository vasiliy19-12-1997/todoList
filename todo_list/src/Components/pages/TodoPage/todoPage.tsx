import axios from "axios";
import { FC, useEffect, useState } from "react";
import List from "../../List/list";
import TodoItem from "../../TodoItem/todoItem";
import { ITodo } from "../../types/types";

const TodoPage: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  useEffect(() => {
    fetchTodo();
  }, []);
  const fetchTodo = async (limit = 10, page = 2) => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos",
        {
          params: {
            _limit: limit,
            _page: page,
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
      <List
        items={todos}
        renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
      />
    </div>
  );
};

export default TodoPage;
