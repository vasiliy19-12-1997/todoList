import React, { useEffect, useState } from "react";
import Card, { CardVariant } from "./Components/Card/card";
import { ITodo, IUser } from "./Components/types/types";

import axios from "axios";
import List from "./Components/List/list";
import UserItem from "./Components/UserItem/userItem";
import TodoItem from "./Components/TodoItem/todoItem";
import EventsExample from "./Components/EventsExample/eventsExample";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserPage from "./Components/pages/UserPage/userPage";
import TodoPage from "./Components/pages/TodoPage/todoPage";
import { Link } from "react-router-dom";
import TodoIdPage from "./Components/pages/TodoIdPage/todoIdPage";
import UserIdPage from "./Components/pages/UserIdPage/userIdPage";

const App = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [todos, setTodos] = useState<ITodo[]>([]);

  return (
    <BrowserRouter>
      <div>
        <Link to="/todos" />
        <Link to="/users" />
      </div>

      <Routes>
        <Route path="/users" element={<UserPage />} />
        <Route path="/todos" element={<TodoPage />} />
        <Route path="/todos/:id" element={<TodoIdPage />} />
        <Route path="/users/:id" element={<UserIdPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
