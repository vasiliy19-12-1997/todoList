<<<<<<< HEAD:todo_list/src/Components/UserItem/userItem.tsx
import React, { FC } from "react";
import { IUser } from "../types/types";
export interface UserItemProps {
=======
import { FC } from "react";
import { IUser } from "../../../../types/types";

interface UserItemProps {
>>>>>>> develop:src/Components/pages/User/UserItem/userItem.tsx
  user: IUser;
  onClick: (user: IUser) => void;
}

const UserItem: FC<UserItemProps> = ({ user, onClick }) => {
  return (
<<<<<<< HEAD
    <div onClick={() => onClick(user)}>
      {user.id}. {user.name} проживает в городе {user.address.city} по адресу{" "}
      {user.address.street}
    </div>
=======
    <>
      <div
        onClick={() => onClick(user)}
        style={{ padding: "15px", border: "1px solid teal" }}
      >
        {user.id}. {user.name} проживает в городе {user.address.city} на улице{" "}
        {user.address.street}
      </div>
    </>
>>>>>>> MobX
  );
};

export default UserItem;
