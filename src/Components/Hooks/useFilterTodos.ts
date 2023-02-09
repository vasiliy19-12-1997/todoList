import { useMemo } from "react";
import { ITodo } from "../../types/types";

export const useSortedTodos = (
  todos: ITodo[],
  sort: keyof ITodo,
  query: string
) => {
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
          return +sortFromB - +sortFromB;
        }
        throw new Error("Ошибка в сортировке");
      });
    }
    return todos;
  }, [sort, todos]);
  return sortedTodos;
};
export default useSortedTodos;
