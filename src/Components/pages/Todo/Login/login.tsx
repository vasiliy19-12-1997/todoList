import { FC, useContext, useState } from "react";
import { AuthContext } from "../../../../Context/context";
import { IAuth } from "../../../../types/types";

import MyButton from "../../../UI/MyButton/myButton";
import MyInput from "../../../UI/MyInput/myInput";

const Login: FC = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext) as IAuth;
  const [password, setPassword] = useState("");
  const [log, setLog] = useState("admin");

  const checkPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (e.target.value === "111") {
      setIsAuth(true);
    }
  };

  const login = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("auth", "true");
  };
  return (
    <>
      <h1>Log in</h1>
      <form onSubmit={login}>
        <MyInput placeholder="admin" value={log} onChange={checkPassword} />
        <MyInput
          type="password"
          placeholder="111"
          value={password}
          onChange={checkPassword}
        />
        <MyButton>Log in</MyButton>
      </form>
    </>
  );
};

export default Login;
