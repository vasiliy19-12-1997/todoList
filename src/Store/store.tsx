import { action, makeObservable, observable } from "mobx";
import { ITodo } from "./../types/types";

class Store {
  todos: ITodo[] = [];
  todo: string = "";

  constructor() {
    makeObservable(this, {
      todos: observable,
      createTodo: action,
      deleteTodo: action,
      todo: observable,
    });
  }

  createTodo(title: string) {
    return this.todos.push({
      id: Math.random(),
      title,
      completed: true,
    });
  }
  deleteTodo(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    console.log(`todos:${this.todos}`);
    console.log(`delete id :${id}`);
  }
}
const store = new Store();

export default store;
