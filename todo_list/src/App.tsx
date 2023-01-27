import React, { useEffect, useState } from "react";
import Card, { CardVariant } from "./Components/Card/card";
import { IUser } from "./Components/types/types";

import axios from "axios";
import List from "./Components/List/list";
import UserItem from "./Components/UserItem/userItem";

const App = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  useEffect(() => {
    fetchUsers();
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
  return (
    <div>
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
    </div>
  );
};

export default App;
