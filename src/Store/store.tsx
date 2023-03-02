import { makeAutoObservable } from "mobx";
import { ITodo } from "./../types/types";

class Store {
  todos: ITodo[] = [];
  todo: string = "";

  constructor() {
    makeAutoObservable(this);
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
}
const store = new Store();

export default store;
