import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import List from "../List/list";
import { ITodo, IUser } from "../types/types";
import UserItem from "../UserItem/userItem";

const UserPage: FC = () => {
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
    <List
      items={users}
      renderItem={(user: IUser) => <UserItem key={user.id} user={user} />}
    />
  );
};

export default UserPage;
