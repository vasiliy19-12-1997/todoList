import React, { FC } from "react";
import { IUser } from "../types/types";
import UserItem from "../UserItem/userItem";
export interface UserListProps {
  users: IUser[];
}
const UserList: FC<UserListProps> = ({ users }) => {
  return (
    <div>
      {users.map((u) => (
        <UserItem key={u.id} user={u} />
      ))}
    </div>
  );
};

export default UserList;
