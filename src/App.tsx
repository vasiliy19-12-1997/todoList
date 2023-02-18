import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Navbar from "./Components/UI/Navbar/navbar";
import TodosPage from "./Components/pages/Todo/TodosPage/todosPage";
import UserItemPage from "./Components/pages/User/UserItemPage/userItemPage";
import UserPage from "./Components/pages/User/UserPage/userPage";
import TodoItemPage from "./Components/pages/Todo/TodoItemPage/todoItemPage";
import { AuthContext } from "./Context/context";
import { useEffect, useState } from "react";
import { Auth } from "./types/types";
import AppRouter from "./Components/AppRouter/appRouter";

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
    }
    setIsLoading(false);
  }, []);
  return (
    <AuthContext.Provider
      value={{ isAuth, setIsAuth, setIsLoading, isLoading }}
    >
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;
