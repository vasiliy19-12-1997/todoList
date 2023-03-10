import axios from "axios";
import { FC, useState, useEffect } from "react";
import { useNavigate } from "react-router";
import List from "../../../List/list";
import { IUser } from "../../../../types/types";
import UserItem from "../UserItem/userItem";

const UserPage: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const navigate = useNavigate();
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
    <>
      <List
        items={users}
        renderItem={(user: IUser) => (
          <UserItem
            onClick={(user) => navigate("/users/" + user.id)}
            key={user.id}
            user={user}
          />
        )}
      />
    </>
  );
};

export default UserPage;
