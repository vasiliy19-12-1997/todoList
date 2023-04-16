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

  changeSort(selectedSort: keyof ITodo) {
    this.filter.sort = selectedSort;
  }
  changeQuery(e: React.ChangeEvent<HTMLInputElement>) {
    this.filter.query = e.target.value;
  }
  toggle(todo: ITodo) {
    todo.completed = !todo.completed;
  }
  get unfinishedTodoCount() {
    return this.todos.filter((todo) => !todo.completed).length;
  }

  createTodo(title: string) {
    this.todos.push({ id: Math.random(), title, completed: false });
    localStorage.setItem("todos", JSON.stringify(store.todos));
  }

  deleteTodo(id: number) {
    this.todos.splice(
      this.todos.findIndex((todo) => todo.id === id),
      1
    );
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  saveEdit(todo: ITodo, value: string) {
    todo.title = value;
    localStorage.setItem("todos", JSON.stringify(this.todos));
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
  }
}
export const store = new Store();
