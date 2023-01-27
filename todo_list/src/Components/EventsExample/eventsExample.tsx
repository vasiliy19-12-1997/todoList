import React, { FC, ReactNode, useState } from "react";

const EventsExample: FC = () => {
  const [value, setValue] = useState<string>("");
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(value);
  };
  return (
    <div>
      <input onChange={changeHandler} />
      <button onClick={clickHandler}>fdfdfdf</button>
      <div style={{ width: "200px", height: "200px", background: "red" }}></div>
      <div
        style={{
          width: "200px",
          height: "200px",
          background: "blue",
          marginTop: "20px",
        }}
      ></div>
    </div>
  );
};

export default EventsExample;
