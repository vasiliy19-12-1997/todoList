import axios from "axios";
import { FC, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { IUser } from "../../../../types/types";

type UserItemPageParams = {
  id: string;
};
const UserItemPage: FC = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const params = useParams<UserItemPageParams>();
  const navigate = useNavigate();
  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const response = await axios.get<IUser>(
        "https://jsonplaceholder.typicode.com/users/" + params.id
      );
      setUser(response.data);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <button onClick={() => navigate(`/users`)}>Back</button>
      <h1>Страница пользователя {user?.name}</h1>
      <div>{user?.email}</div>
      <div>
        {user?.address.city} {user?.address.street} {user?.address.zipcode}
      </div>
    </div>
  );
};

export default UserItemPage;