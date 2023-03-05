import { makeAutoObservable } from "mobx";
import { IFilter, ITodo } from "../types/types";

class Store {
  todos: ITodo[] = [
    { id: Math.random(), title: "JS", completed: true },
    { id: Math.random(), title: "TS", completed: true },
    { id: Math.random(), title: "C#", completed: true },
  ];

  filter: IFilter = { sort: "title", query: "" };

  constructor() {
    makeAutoObservable(this);
  }
  //сделана задача
  toggle(todo: ITodo) {
    return (todo.completed = !todo.completed);
  }
  //показывает сколько галочек поставил
  get unfinishedTodoCount() {
    return this.todos.filter((todo) => !todo.completed).length;
  }
  createTodo(title: string) {
    return this.todos.push({
      id: Math.random(),
      title,
      completed: true,
    });
  }
  deleteTodo(id: number) {
    this.todos.splice(
      this.todos.findIndex((todo) => todo.id === id),
      1
    );
  }
  saveEdit(todo: ITodo, value: string) {
    return (todo.title = value);
  }
  sortTodo(sort: keyof ITodo) {
    if (sort) {
      this.todos.sort((a, b) => {
        const sortFromA = a[sort];
        const sortFromB = b[sort];
        if (typeof sortFromA === "string" && typeof sortFromB === "string") {
          return sortFromA.localeCompare(sortFromB);
        }
        if (typeof sortFromA === "number" && typeof sortFromB === "number") {
          return sortFromA - sortFromB;
        }
        if (typeof sortFromA === "boolean" && typeof sortFromB === "boolean") {
          return +sortFromA - +sortFromB;
        }
        throw new Error("Ошибка в сортировке");
      });
    }
    this.filter.sort = sort;
    return this.todos;
  }
}

export const store = new Store();
