import axios from "axios";
import React, { FC, useState } from "react";
import { useParams } from "react-router-dom";
import { IUser } from "../types/types";

interface UserItemPageParams{
    id:string,
}
const UserItemPage: FC = () => {
    const [user, setUser] = useState<IUser | null>(null);
    const params = useParams<UserItemPageParams>();
    useEffect(() => {
      fetchUser();
    }, []);

    const fetchUser = async () => {
      try {
        const response = await axios.get<IUser>(
          "https://jsonplaceholder.typicode.com/users/" + 
        );
        setUser(response.data);
      } catch (error) {
        alert(error);
      }
    };
  
  return <div></div>;
};

export default UserItemPage;
