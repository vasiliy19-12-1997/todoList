import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import AppRouter from "./Components/AppRouter/appRouter";
import Navbar from "./Components/UI/Navbar/navbar";
import { AuthContext } from "./Context/context";
import { ThemeProvider } from "./Context/themeContext";

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
    }
    setIsLoading(false);
  }, []);

  return (
    <ThemeProvider>
      <AuthContext.Provider
        value={{ isAuth, setIsAuth, setIsLoading, isLoading }}
      >
        <BrowserRouter>
          <Navbar />
          <AppRouter />
        </BrowserRouter>
      </AuthContext.Provider>
    </ThemeProvider>
  );
};

export default App;
