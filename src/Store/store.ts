import { makeAutoObservable } from "mobx";
import { IFilter, ITodo } from "../types/types";

class Store {
  todos: ITodo[] = this.getLocaleTodos();
  filter: IFilter = { sort: "title", query: "" };

  constructor() {
    makeAutoObservable(this);
    this.todos = this.getLocaleTodos();
  }

  //сделана задача
  toggle(todo: ITodo) {
    return (todo.completed = !todo.completed);
  }
  //показывает сколько галочек поставил
  get unfinishedTodoCount() {
    return this.todos.filter((todo) => !todo.completed).length;
  }
  //создать задачу
  createTodo(title: string) {
    this.todos.push({
      id: Math.random(),
      title,
      completed: true,
    });
    //сохраним в locale storage
    const todos = localStorage.setItem("todos", JSON.stringify(store.todos));
    return todos;
  }
  //удалим задачу
  deleteTodo(id: number) {
    this.todos.splice(
      this.todos.findIndex((todo) => todo.id === id),
      1
    );
  }

  //сохранить при изменении туду
  saveEdit(todo: ITodo, value: string) {
    return (todo.title = value);
  }
  //сортирока
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
    return [this.todos];
  }
  //поиск по запросу
  searchQuery(query: string) {
    this.todos.find((todo) =>
      todo.title.toLowerCase().includes(query.toLowerCase())
    );
  }
  getLocaleTodos() {
    const stored = localStorage.getItem("todos");
    if (stored) {
      return JSON.parse(stored);
    } else if (!stored) {
      return [];
    }
  }
  //из locale storage
  getTodos() {
    localStorage.getItem("todos");
  }
}
export const store = new Store();
