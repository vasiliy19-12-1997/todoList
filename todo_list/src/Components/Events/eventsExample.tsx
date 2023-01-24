import React, { FC, useState } from "react";

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
      <input value={value} onChange={changeHandler} />
      <button onClick={clickHandler}>BUTTon</button>
    </div>
  );
};

export default EventsExample;
