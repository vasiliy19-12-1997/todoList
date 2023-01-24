import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import List from "../List/list";
import TodoItem from "../TodoItem/todoItem";
import { ITodo } from "../types/types";

const TodosPage: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
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
    <List
      items={todos}
      renderItem={(todo: ITodo) => <TodoItem key={todo.id} todo={todo} />}
    />
  );
};

export default TodosPage;
