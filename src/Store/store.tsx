import { configure, makeAutoObservable } from "mobx";
import { ITodo } from "./../types/types";

const createTodo = (todos: ITodo[], title: string) => [
  {
    ...todos,
    id: Math.random(),
    title,
    completed: false,
  },
];
const deleteTodo = (todos: ITodo[], id: number): ITodo[] => {
  return todos.filter((t) => t.id !== id);
};

class Store {
  todos: ITodo[] = [];
  newTodo: string = "";
  constructor() {
    makeAutoObservable(this);
  }

  createTodo() {
    this.todos = createTodo(this.todos, this.newTodo);
    this.newTodo = "";
  }
  deleteTodo(id: number) {
    this.todos = deleteTodo(this.todos, id);
  }
}
const store = new Store();

export default store;
