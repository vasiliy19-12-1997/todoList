import React from "react";
import Card, { CardVariant } from "./Components/Card/card";
import { IUser } from "./Components/types/types";
import UserList from "./Components/UserList/userList";

const App = () => {
  const users: IUser[] = [
    {
      id: 1,
      name: "Leanne Graham",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        city: "Gwenborough",
        zipcode: "92998-3874",
      },
    },
    {
      id: 2,
      name: "Ervin Howell",
      email: "Shanna@melissa.tv",
      address: {
        street: "Victor Plains",
        city: "Wisokyburgh",
        zipcode: "90566-7771",
      },
    },
  ];
  return (
    <div>
      <Card
        onClick={(num) => console.log("click", num)}
        variant={CardVariant.outlined}
        width="200px"
        height="200px"
      >
        <button>button</button>
        <div>gfdfgd</div>
      </Card>
      <UserList users={users} />
    </div>
  );
};

export default App;
