import axios from "axios";
import { FC, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router";
import List from "../../../List/list";

import TodoItem from "../TodoItem/todoItem";
import TodoForm from "../TodoForm/todoForm";
import { useFetching } from "./../../../Hooks/useFetching";
import ServiceTodo from "../../../API/serviceTodo";
import MySelect from "../../../UI/MySelect/mySelect";
import MyButton from "../../../UI/MyButton/myButton";
import { ITodo, TestFields } from "../../../../types/types";
import TodoFilter from "../TodoFilter/todoFilter";

const TodosPage: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [filter, setFilter] = useState<{ [key: string]: TestFields }>({});
  // const [filter, setFilter] = useState({ sort: "", query: "" });
  const [fetching, isLoading, error] = useFetching(async () => {
    const response = await ServiceTodo.getAll();
    setTodos(response);
  });
  const navigate = useNavigate();

  const deleteTodo = (todo: ITodo) => {
    setTodos([...todos].filter((t) => t?.id !== todo?.id));
  };
  const createTodo = (newTask: ITodo) => {
    setTodos([...todos, newTask]);
  };

  // const sortedTodos = useMemo(() => {
  //   if (filter.sort) {
  //     return [...todos].sort((a, b) => {
  //       return a[filter.sort].localeCompare(b[filter.sort]);
  //     });
  //   }
  //   return todos;
  // }, []);

  useEffect(() => {
    fetching();
  }, []);

  return (
    <div>
      <MyButton onClick={() => navigate(`/users`)}>Users</MyButton>
      <MyButton>fdf</MyButton>
      <TodoForm create={createTodo} />
      {/* <TodoFilter filter={filter} setFilter={setFilter} /> */}

      <List
        items={todos}
        renderItem={(todo: ITodo, index) => (
          <TodoItem
            deleteTodo={deleteTodo}
            key={todo.id}
            todo={todo}
            index={index + 1}
          />
        )}
      />
    </div>
  );
};

export default TodosPage;
