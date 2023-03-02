import { observer } from "mobx-react-lite";
import "mobx-react-lite/batchingForReactDom";
import { FC, useEffect, useState } from "react";
import store from "../../../../Store/store";
import { ITodo } from "../../../../types/types";
import useFilterTodos from "../../../Hooks/useFilterTodos";
import List from "../../../List/list";
import Header from "../../../UI/Header/header";
import TodoFilter from "../TodoFilter/todoFilter";
import TodoForm from "../TodoForm/todoForm";
import TodoItem from "../TodoItem/todoItem";

const TodosPage: FC = () => {
  const [filter, setFilter] = useState<{ sort: keyof ITodo; query: string }>({
    sort: "title",
    query: "",
  });
  //фильтр + сортировка
  const sortedAndSearchTodos = useFilterTodos(
    store.todos,
    filter.sort,
    filter.query
  );
  //locale Storage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(sortedAndSearchTodos));
  }, [sortedAndSearchTodos]);
  const TodoListObserver = observer(List);

  return (
    <>
      <TodoFilter filter={filter} setFilter={setFilter} />
      <Header>Todo App</Header>
      <TodoForm />
      <TodoListObserver
        items={store.todos}
        renderItem={(todo, index) => (
          <TodoItem key={todo.id} todo={todo} index={index + 1} />
        )}
      />
    </>
  );
};

export default TodosPage;
