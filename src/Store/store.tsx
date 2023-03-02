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
      id: Math.max(0, Math.max(...this.todos.map(({ id }) => id))) + 1,
      title,
      completed: true,
    });
  }
  deleteTodo(id: number) {
    console.log(`todos:${this.todos}`);
    console.log(`delete id :${id}`);
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
}
const store = new Store();

export default store;
