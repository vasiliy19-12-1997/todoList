import { action, makeObservable, observable } from "mobx";
import { ITodo } from "./../types/types";

const deleteTodo = (todos: ITodo[], id: number): ITodo[] => {
  return todos.filter((t) => t.id !== id);
};

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
    this.todos.push({ id: Math.random(), title, completed: true });
  }
  deleteTodo(id: number) {
    this.todos = deleteTodo(this.todos, id);
  }
}
const store = new Store();

export default store;
