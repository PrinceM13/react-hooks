import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import { HomePage } from "./pages/HomePage.jsx";
import { GuessNumberPage } from "./pages/GuessNumberPage.jsx";
import { ChallengePage } from "./pages/ChallengePage.jsx";
import { AuthContext } from "./contexts/AuthContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/game",
    element: <GuessNumberPage />
  },
  {
    path: "/challenge",
    element: <ChallengePage />
  }
]);

const useAuthContext = () => {
  const [username, setUsername] = React.useState("");
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const login = () => {
    setUsername("erk");
    setIsLoggedIn(true);
  };
  const logout = () => {
    setUsername("");
    setIsLoggedIn(false);
  };
  return { username, isLoggedIn, login, logout };
};

function App() {
  const { username, isLoggedIn, login, logout } = useAuthContext();

  return (
    <AuthContext.Provider value={{ username, isLoggedIn, login, logout }}>
      <RouterProvider router={router} />
    </AuthContext.Provider>
  );
}

export default App;
