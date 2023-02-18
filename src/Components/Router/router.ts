import Login from "../pages/Todo/Login/login";
import TodoItemPage from "../pages/Todo/TodoItemPage/todoItemPage";
import TodosPage from "../pages/Todo/TodosPage/todosPage";
import UserItemPage from "../pages/User/UserItemPage/userItemPage";
import UserPage from "../pages/User/UserPage/userPage";

export const privateRoutes = [
  { path: "/TodoList", element: TodosPage },
  { path: "/TodoList/:id", element: TodoItemPage },
  { path: "/users", element: UserPage },
  { path: "/users/:id", element: UserItemPage },
];
export const publicRoutes = [{ path: "/login", element: Login }];
