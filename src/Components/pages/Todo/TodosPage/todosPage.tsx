import { observer } from "mobx-react-lite";
import "mobx-react-lite/batchingForReactDom";
import { FC } from "react";
import { store } from "../../../../Store/store";

import List from "../../../List/list";
import Header from "../../../UI/Header/header";
import TodoFilter from "../TodoFilter/todoFilter";
import TodoForm from "../TodoForm/todoForm";
import TodoItem from "../TodoItem/todoItem";

const TodosPage: FC = () => {
  // фильтр + сортировка

  //locale Storage
  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(sortedAndSearchTodos));
  // }, [sortedAndSearchTodos]);
  const TodoListObserver = observer(List);

  return (
    <>
      <TodoFilter />
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
