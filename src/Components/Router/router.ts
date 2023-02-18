import Login from "../pages/Todo/Login/login";
import TodoItemPage from "../pages/Todo/TodoItemPage/todoItemPage";
import TodosPage from "../pages/Todo/TodosPage/todosPage";
import UserPage from "../pages/User/UserPage/userPage";

export const privateRoutes = [
  { path: "/TodoList", element: TodosPage },
  { path: "/TodoList/:id", element: TodoItemPage },
  { path: "/users", element: UserPage },
];
export const publicRoutes = [{ path: "/login", element: Login }];
