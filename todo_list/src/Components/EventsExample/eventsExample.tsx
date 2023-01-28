import React, { FC, ReactNode, useRef, useState } from "react";

const EventsExample: FC = () => {
  const [value, setValue] = useState<string>("");
  const [isDrag, setIsDrag] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
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
  const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(true);
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(inputRef.current?.value);
  };
  return (
    <div>
      <input ref={inputRef} />
      <input onChange={changeHandler} />
      <button onClick={clickHandler}>fdfdfdf</button>
      <div
        onDrop={dragHandler}
        draggable
        style={{
          width: "200px",
          height: "200px",
          background: "red",
        }}
      ></div>
      <div
        onDrop={dropHandler}
        onDragLeave={leaveHandler}
        onDragOver={dragWithPreventHandler}
        style={{
          width: "200px",
          height: "200px",
          background: isDrag ? "blue" : "red",
          marginTop: "20px",
        }}
      ></div>
    </div>
  );
};

export default EventsExample;
