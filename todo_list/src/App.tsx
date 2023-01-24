import React from "react";
import Card, { CardVariant } from "./Components/card";

const App = () => {
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
    </div>
  );
};

export default App;
