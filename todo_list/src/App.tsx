import React, { useEffect, useState } from "react";
import Card, { CardVariant } from "./Components/Card/card";
import { ITodo, IUser } from "./Components/types/types";

import axios from "axios";
import List from "./Components/List/list";
import UserItem from "./Components/UserItem/userItem";
import TodoItem from "./Components/TodoItem/todoItem";
import EventsExample from "./Components/EventsExample/eventsExample";

const App = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchUsers();
    fetchTodo();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (error) {
      alert(error);
    }
  };
  const fetchTodo = async (limit = 10, page = 2) => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos",
        {
          params: {
            _limit: limit,
            _page: page,
          },
        }
      );
      setTodos(response.data);
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div>
      <EventsExample />
      <Card
        onClick={() => console.log("click")}
        variant={CardVariant.outlined}
        width="200px"
        height="200px"
      >
        <button>Click</button>
      </Card>
      {/* <UserList users={users} /> */}
      <List
        items={users}
        renderItem={(user: IUser) => <UserItem user={user} key={user.id} />}
      />
      <List
        items={todos}
        renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
      />
    </div>
  );
};

export default App;
