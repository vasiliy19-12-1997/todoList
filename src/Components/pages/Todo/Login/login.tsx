import { observer } from "mobx-react";
import { FC, useContext, useState } from "react";
import { AuthContext } from "../../../../Context/context";
import { IAuth } from "../../../../types/types";
import MyButton from "../../../UI/MyButton/myButton";
import MyInput from "../../../UI/MyInput/myInput";
import "./login.scss";
const Login: FC = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext) as IAuth;
  const [admin, setAdmin] = useState("");
  const [password, setPassword] = useState("");

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const onChangeAdmin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAdmin(e.target.value);
  };
  const login = (e: React.FormEvent) => {
    e.preventDefault();
    if (admin === "admin" && password === "111") {
      setIsAuth(true);
      localStorage.setItem("authTodo", "true");
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        Sign in{" "}
      </h1>
      <form onSubmit={login}>
        <MyInput
          type="text"
          placeholder="admin"
          value={admin}
          onChange={onChangeAdmin}
        />
        <MyInput
          type="password"
          placeholder="111"
          value={password}
          onChange={onChangePassword}
        />
        <MyButton>Sign in</MyButton>
      </form>
    </div>
  );
};

export default observer(Login);
