import axios from "axios";
import React, { useEffect, useState } from "react";
import Card, { CardVariant } from "./Components/Card/card";
import { IUser } from "./Components/types/types";
import UserList from "./Components/UserList/userList";
import List from "./Components/List/list";
import UserItem from "./Components/UserItem/userItem";

const App = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  useEffect(() => {
    fetchUsers();
  }, []);
  const fetchUsers = async () => {
    try {
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div>
      <Card
        onClick={(num) => console.log("click", num)}
        variant={CardVariant.outlined}
        width="200px"
        height="200px"
      >
        <button>button</button>
        <div>gfdfgd</div>
      </Card>
      <List
        items={users}
        renderItem={(user: IUser) => <UserItem key={user.id} user={user} />}
      />
    </div>
  );
};

export default App;
