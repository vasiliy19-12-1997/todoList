import React from "react";
import Card, { CardVariant } from "./Components/Card/card";
import UserList from "./Components/UserList/userList";

const App = () => {
  const users = [{}];
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
      <UserList users={[]} />
    </div>
  );
};

export default App;
