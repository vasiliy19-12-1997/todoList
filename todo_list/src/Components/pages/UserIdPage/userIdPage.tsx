import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ITodo, IUser } from "../../types/types";
type UserIdPageParams = {
  id: string;
};
const UserIdPage = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const params = useParams<UserIdPageParams>();
  const navigate = useNavigate();
  useEffect(() => {
    fetchTodo();
  }, []);
  const fetchTodo = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users/" + params.id
      );

      setUser(response.data);
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div>
      <button onClick={() => navigate("/users")}>Back</button>
      {user?.address.city} {user?.email} {user?.name}
    </div>
  );
};

export default UserIdPage;
