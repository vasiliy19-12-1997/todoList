import { makeAutoObservable } from "mobx";
import { ITodo } from "../types/types";

class Store {
  todos: ITodo[] = [
    { id: Math.random(), title: "JS", completed: false },
    { id: Math.random(), title: "TS", completed: false },
    { id: Math.random(), title: "C#", completed: false },
  ];

  constructor() {
    makeAutoObservable(this);
  }
  toggle(todo: ITodo) {
    return (todo.completed = !todo.completed);
  }
  get completedTodoCount() {
    return this.todos.find((todo) => !todo.completed);
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
}
export const store = new Store();

// class StoreFilter {
//   filter: FilterStore;
//   constructor() {
//     makeObservable(this, {
//       filter: computed,
//     });
//   }
//   get filterComputed() {
//     return this.filter;
//   }
// }
// export const filterStore = new StoreFilter();
