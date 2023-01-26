import axios from "axios";
import React, { useEffect, useState } from "react";
import Card, { CardVariant } from "./Components/Card/card";
import { ITodo, IUser } from "./Components/types/types";
// import UserList from "./Components/UserList/userList";
import List from "./Components/List/list";
import UserItem from "./Components/UserItem/userItem";
import TodoItem from "./Components/TodoItem/todoItem";
import EventsExample from "./Components/Events/eventsExample";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import UserPage from "./Components/UserPage/userPage";
import TodosPage from "./Components/TodosPage/todosPage";
import { Link } from "react-router-dom";
import Navbar from "./Components/Navbar/navbar";
import UserItemPage from "./Components/UserItemPage/userItemPage";
import TodoItemPage from "./Components/TodoItemPage/todoItemPage";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/users" element={<UserPage />}></Route>
        <Route path="/todos" element={<TodosPage />}></Route>
        <Route path="/users/:id" element={<UserItemPage />}></Route>
        <Route path="/todos/:id" element={<TodoItemPage />}></Route>
        <Route path="/*" element={<Navigate to="/todos" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
