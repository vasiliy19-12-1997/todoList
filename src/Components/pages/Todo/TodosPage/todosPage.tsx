import { FC, useEffect, useState } from "react";
import List from "../../../List/list";

import { ITodo } from "../../../../types/types";
import ServiceTodo from "../../../API/serviceTodo";
import { useFilterTodos } from "../../../Hooks/useFilterTodos";
import Header from "../../../UI/Header/header";
import TodoFilter from "../TodoFilter/todoFilter";
import TodoForm from "../TodoForm/todoForm";
import TodoItem from "../TodoItem/todoItem";
import { useFetching } from "./../../../Hooks/useFetching";
import Loader from "./../../../UI/Loader/loader";

const TodosPage: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [filter, setFilter] = useState<{ sort: keyof ITodo; query: string }>({
    sort: "title",
    query: "",
  });
  const sortedAndSearchTodos = useFilterTodos(todos, filter.sort, filter.query);
  const [fetching, isLoading, error] = useFetching(async () => {
    const response: ITodo[] = await ServiceTodo.getTodos();
    setTodos(response);
  });

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
      <Header>Todo App</Header>
      <TodoFilter filter={filter} setFilter={setFilter} />
      <TodoForm create={createTodo} />

      {isLoading ? (
        <Loader>Loading...</Loader>
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
