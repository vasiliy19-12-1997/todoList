import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import List from "../../../List/list";

import { ITodo } from "../../../../types/types";
import ServiceTodo from "../../../API/serviceTodo";
import { useFilterTodos } from "../../../Hooks/useFilterTodos";
import Loader from "../../../UI/Loader/loader";
import MyButton from "../../../UI/MyButton/myButton";
import TodoFilter from "../TodoFilter/todoFilter";
import TodoForm from "../TodoForm/todoForm";
import TodoItem from "../TodoItem/todoItem";
import { useFetching } from "./../../../Hooks/useFetching";

const TodosPage: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [filter, setFilter] = useState<{ sort: keyof ITodo; query: string }>({
    sort: "title",
    query: "",
  });
  const sortedAndSearchTodos = useFilterTodos(todos, filter.sort, filter.query);
  const [fetching, isLoading, error] = useFetching(async () => {
    const response: Array<ITodo> = await ServiceTodo.getAll();
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
      <Loader />
      {isLoading ? (
        <Loader />
      ) : (
        <List
          items={sortedAndSearchTodos}
          renderItem={(todo: ITodo, index) => (
            <TodoItem
              deleteTodo={deleteTodo}
              key={todo.id}
              todo={todo}
              index={index + 1}
            />
          )}
        />
      )}
    </div>
  );
};

export default TodosPage;
