import { action, computed, makeObservable, observable } from "mobx";
import { ITodo } from "./../types/types";

const createTodo = (todos: ITodo[], title: string) => [
  ...todos,
  { id: Math.random(), title, completed: true },
];
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

  createTodo() {
    this.todos = createTodo(this.todos, this.todo);
  }
  deleteTodo(id: number) {
    this.todos.filter((t) => t.id !== id);
  }
}
const store = new Store();

export default store;
