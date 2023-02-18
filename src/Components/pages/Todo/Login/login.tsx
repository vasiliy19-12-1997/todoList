import { FC, useContext } from "react";
import { AuthContext } from "../../../../Context/context";
import { Auth } from "../../../../types/types";
import MyButton from "../../../UI/MyButton/myButton";
import MyInput from "../../../UI/MyInput/myInput";

const Login: FC = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext) as Auth;
  const login = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAuth(true);
    localStorage.setItem("auth", "true");
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={login}>
        <MyInput placeholder="Enter name" />
        <MyInput placeholder="Enter password" />
        <MyButton>Log in</MyButton>
      </form>
    </div>
  );
};

export default Login;
