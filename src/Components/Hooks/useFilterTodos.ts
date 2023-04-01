import { useMemo } from "react";
import { ITodo } from "../../types/types";

export const useSortedTodos = (todos: ITodo[], sort: keyof ITodo) => {
  const sortedTodos = useMemo(() => {
    if (sort) {
      return todos.sort((a, b) => {
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
  }, [sort, todos]);
  return sortedTodos;
};
export const useFilterTodos = (
  todos: ITodo[],
  sort: keyof ITodo,
  query: string
) => {
  const sortedTodos = useSortedTodos(todos, sort);
  const sortedAndSearchTodos = useMemo(() => {
    return sortedTodos.filter((todo) =>
      todo.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [sortedTodos, sort, query]);
  return sortedAndSearchTodos;
};

export default useFilterTodos;
