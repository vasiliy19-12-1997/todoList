import React, { FC, useRef, useState } from "react";

const EventsExample: FC = () => {
  const [value, setValue] = useState<string>("");
  const [isDrag, setIsDrag] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(inputRef.current?.value);
  };
  const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
    console.log("Drag");
  };
  const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
    console.log("Drop");
  };
  const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
  };
  const drugWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(true);
  };
  return (
    <div>
      <input value={value} onChange={changeHandler} placeholder="управляемый" />
      <input ref={inputRef} placeholder="неуправляемый" />
      <button onClick={clickHandler}>BUTTon</button>
      <div
        onDrag={dragHandler}
        draggable
        style={{
          width: "200px",
          height: "200px",
          background: isDrag ? "red" : "blue",
        }}
      ></div>
      <div
        onDrop={dropHandler}
        onDragLeave={leaveHandler}
        onDragOver={drugWithPreventHandler}
        style={{
          width: "200px",
          height: "200px",
          background: "blue",
          marginTop: "15px",
        }}
      ></div>
    </div>
  );
};

export default EventsExample;
