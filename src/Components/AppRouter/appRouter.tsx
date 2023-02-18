import { FC, useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "../../Context/context";
import { Auth } from "../../types/types";
import TodoItemPage from "../pages/Todo/TodoItemPage/todoItemPage";
import TodosPage from "../pages/Todo/TodosPage/todosPage";
import UserItemPage from "../pages/User/UserItemPage/userItemPage";
import UserPage from "../pages/User/UserPage/userPage";
import { privateRoutes, publicRoutes } from "../Router/router";

const AppRouter: FC = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext) as Auth;
  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route element={<route.element />} path={route.path} key={route.path} />
      ))}
      {/* если пользователь введет не существующий url, то перейдем к туду листу */}
      <Route path="/*" element={<Navigate to="/todoList" replace />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route element={<route.element />} path={route.path} key={route.path} />
      ))}
      <Route path="/*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default AppRouter;
