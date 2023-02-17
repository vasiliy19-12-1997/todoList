import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Navbar from "./Components/UI/Navbar/navbar";
import TodosPage from "./Components/pages/Todo/TodosPage/todosPage";
import UserItemPage from "./Components/pages/User/UserItemPage/userItemPage";
import UserPage from "./Components/pages/User/UserPage/userPage";
import TodoItemPage from "./Components/pages/Todo/TodoItemPage/todoItemPage";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/users" element={<UserPage />}></Route>
        <Route path="/todoList" element={<TodosPage />}></Route>
        <Route path="/users/:id" element={<UserItemPage />}></Route>
        <Route path="/todoList/:id" element={<TodoItemPage />}></Route>
        <Route path="/*" element={<Navigate to="/todoList" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
