import { useObserver } from "mobx-react-lite";
import { ITodo } from "../../types/types";

export const useSort = (todos: ITodo[], sort: keyof ITodo) => {
  const sortedTodos = useObserver(() => {
    if (sort) {
      return todos.slice().sort((a, b) => {
        const sortFromA = a[sort];
        const sortFromB = b[sort];
        if (typeof sortFromA === "string" && typeof sortFromB === "string") {
          return sortFromA.localeCompare(sortFromB);
        }
        if (typeof sortFromA === "number" && typeof sortFromB === "number") {
          return sortFromA - sortFromB;
        }
        if (typeof sortFromA === "boolean" && typeof sortFromB === "boolean") {
          return +sortFromB - +sortFromA;
        }
        throw new Error("Ошибка в сортировке");
      });
    }
    return todos;
  });
  return sortedTodos;
};
export const useFilter = (todos: ITodo[], sort: keyof ITodo, query: string) => {
  const sortedTodos = useSort(todos, sort);
  const sortedAndSearchTodos = useObserver(() => {
    return sortedTodos.filter((todo) =>
      todo.title.toLowerCase().includes(query.toLowerCase())
    );
  });
  return sortedAndSearchTodos;
};

export default useFilter;
