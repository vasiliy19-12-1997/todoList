import { FC, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router";
import List from "../../../List/list";

import { ITodo } from "../../../../types/types";
import ServiceTodo from "../../../API/serviceTodo";
import MyButton from "../../../UI/MyButton/myButton";
import TodoForm from "../TodoForm/todoForm";
import TodoItem from "../TodoItem/todoItem";
import { useFetching } from "./../../../Hooks/useFetching";
import TodoFilter from "../TodoFilter/todoFilter";
import useSortedTodos from "../../../Hooks/useFilterTodos";

const TodosPage: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [filter, setFilter] = useState<{ sort: keyof ITodo; query: string }>({
    sort: "title",
    query: "",
  });
  const sortedTodos = useSortedTodos(todos, filter.sort, filter.query);
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

  useEffect(() => {
    fetching();
  }, []);

  return (
    <div>
      <MyButton onClick={() => navigate(`/users`)}>Users</MyButton>
      <MyButton>fdf</MyButton>
      <TodoForm create={createTodo} />
      <TodoFilter filter={filter} setFilter={setFilter} />

      <List
        items={sortedTodos}
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
