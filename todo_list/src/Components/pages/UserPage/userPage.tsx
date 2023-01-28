import axios from "axios";
import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import List from "../../List/list";
import { IUser } from "../../types/types";
import UserItem from "../../UserItem/userItem";

const UserPage: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const navigate = useNavigate();
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
      <List
        items={users}
        renderItem={(user: IUser) => (
          <UserItem
            onClick={(user) => navigate("/users/" + user.id)}
            user={user}
            key={user.id}
          />
        )}
      />
    </div>
  );
};

export default UserPage;
