import { FC, useContext } from "react";
import { AuthContext } from "../../../../Context/context";
import { store } from "../../../../Store/store";

import { IAuth } from "../../../../types/types";

import MyButton from "../../../UI/MyButton/myButton";
import MyInput from "../../../UI/MyInput/myInput";

const Login: FC = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext) as IAuth;

  const checkPassword = (e: React.ChangeEvent<HTMLInputElement>) => {};
  const checkAdmin = () => {};

  const login = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("auth", "true");
  };
  return (
    <>
      <h1>Log in</h1>
      <form onSubmit={login}>
        <MyInput type="text" placeholder="admin" value={store.auth.admin} />
        <MyInput
          type="password"
          placeholder="111"
          value={store.auth.password}
        />
        <MyButton>Sign in</MyButton>
      </form>
    </>
  );
};

export default Login;
