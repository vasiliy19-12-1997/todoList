import { observer } from "mobx-react-lite";
import { FC, useEffect } from "react";
import { store } from "../../../../Store/store";

import useFilterTodos from "../../../Hooks/useFilterTodos";
import List from "../../../List/list";
import Header from "../../../UI/Header/header";
import TodoFilter from "../TodoFilter/todoFilter";
import TodoForm from "../TodoForm/todoForm";
import TodoItem from "../TodoItem/todoItem";

const TodosPage: FC = () => {
  const sortedAndSearchTodos = useFilterTodos(
    store.todos,
    store.filter.sort,
    store.filter.query
  );
  useEffect(() => {
    store.getTodos();
  }, []);
  const TodoFormObserver = observer(TodoForm);
  return (
    <>
      <Header>Todo App</Header>
      <TodoFilter />
      <TodoFormObserver />
      <List
        items={sortedAndSearchTodos}
        renderItem={(todo, index) => (
          <TodoItem key={todo.id} todo={todo} index={index + 1} />
        )}
      />
    </>
  );
};

export default observer(TodosPage);
