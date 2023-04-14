import { makeAutoObservable } from "mobx";
import { ICheckAuth, IFilter, ITodo } from "../types/types";

class Store {
  todos: ITodo[] = this.getLocaleTodos();
  filter: IFilter = { sort: "title", query: "" };
  auth: ICheckAuth = { password: "", admin: "" };

  constructor() {
    makeAutoObservable(this);
    this.todos = this.getLocaleTodos();
  }

  //сделана задача
  toggle(todo: ITodo) {
    const complete = (todo.completed = !todo.completed);
    return complete;
    // localStorage.setItem("completeTodo", JSON.stringify(complete));
  }
  //показывает сколько галочек поставил
  get unfinishedTodoCount() {
    return this.todos.filter((todo) => !todo.completed).length;
  }

  createTodo(title: string) {
    this.todos.push({ id: Math.random(), title, completed: true });
    const todos = localStorage.setItem("todos", JSON.stringify(store.todos));
    return todos;
  }

  deleteTodo(id: number) {
    this.todos.splice(
      this.todos.findIndex((todo) => todo.id === id),
      1
    );
    //фиксить надо удаляет все туду
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  //сохранить при изменении туду
  saveEdit(todo: ITodo, value: string) {
    todo.title = value;
    return localStorage.setItem("todos", JSON.stringify(this.todos));
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
    console.log(`sort работает ${this.filter.sort}`);
  }
  //поиск по запросу
  setSearchQuery(query: string) {
    this.filter.query = query;
  }
  getSearchQuery(query: string) {
    const searchTodo = this.todos.filter((todo) =>
      todo.title.toLowerCase().includes(query.toLowerCase())
    );
    this.filter.query = query;
    return searchTodo;
  }
  getLocaleTodos() {
    const stored = localStorage.getItem("todos");
    if (stored) {
      return JSON.parse(stored);
    } else if (!stored) {
      return [];
    }
  }

  getTodos() {
    localStorage.getItem("todos");
    // localStorage.getItem("completeTodo");
  }
}
export const store = new Store();
