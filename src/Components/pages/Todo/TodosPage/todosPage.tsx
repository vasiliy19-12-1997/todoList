import { FC, useState } from "react";
import List from "../../../List/list";
import "mobx-react-lite/batchingForReactDom";
import { observer } from "mobx-react-lite";
import store from "../../../../Store/store";
import { ITodo } from "../../../../types/types";
import Header from "../../../UI/Header/header";
import TodoFilter from "../TodoFilter/todoFilter";
import TodoForm from "../TodoForm/todoForm";
import TodoItem from "../TodoItem/todoItem";

const TodosPage: FC = () => {
  //locale storage
  // const stored = localStorage.getItem("todos");
  // const getLocaleTodos = () => {
  //   if (stored) {
  //     return JSON.parse(stored);
  //   }
  //   if (!stored) {
  //     return [];
  //   } else {
  //     return store.todos;
  //   }
  // };
  //main store
  // const [todos, setTodos] = useState<ITodo[]>(getLocaleTodos() || []);
  // const [todos, setTodos] = useState<ITodo[]>(getLocaleTodos());

  const [filter, setFilter] = useState<{ sort: keyof ITodo; query: string }>({
    sort: "title",
    query: "",
  });
  //фильтр + сортировка
  // const sortedAndSearchTodos = useFilterTodos(todos, filter.sort, filter.query);

  //использую поля из массива хука для загрузки данных с сервера
  // const [fetching, isLoading, error] = useFetching(async () => {
  //   const response: ITodo[] = await ServiceTodo.getTodos();
  //   setTodos(response);
  // });

  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(store.todos));
  // }, [store.todos]);

  return (
    <>
      <TodoFilter filter={filter} setFilter={setFilter} />
      <Header>Todo App</Header>

      <TodoForm />

      <List
        items={store.todos}
        renderItem={(todo: ITodo, index) => (
          <TodoItem key={todo.id} todo={todo} index={index + 1} />
        )}
      />
    </>
  );
};

export default TodosPage;
