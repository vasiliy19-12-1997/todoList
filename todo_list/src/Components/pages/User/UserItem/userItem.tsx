import { FC } from "react";
import { IUser } from "../../../../types/types";

interface UserItemProps {
  user: IUser;
  onClick: (user: IUser) => void;
}

const UserItem: FC<UserItemProps> = ({ user, onClick }) => {
  return (
    <div>
      <div
        onClick={() => onClick(user)}
        style={{ padding: "15px", border: "1px solid teal" }}
      >
        {user.id}. {user.name} проживает в городе {user.address.city} на улице{" "}
        {user.address.street}
      </div>
    </div>
  );
};

export default UserItem;
