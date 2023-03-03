import { computed, makeObservable, observable } from "mobx";
import { ITodo } from "../types/types";
interface Store {
  filter: { sort: keyof ITodo; query: string };
}
class Store {
  todos: ITodo[] = [];
  todo: string = "";
  completed = false;
  constructor() {
    makeObservable(this, {
      todos: observable,
      todo: observable,
      completed: observable,
      completedTodoCount: computed,
    });
  }
  toggle() {
    this.completed = !this.completed;
  }
  get completedTodoCount() {
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
}
const store = new Store();

export default store;
