import { NavLink } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const Navbar = () => {
  const { username, isLoggedIn, login, logout } = useAuth();

  return (
    <>
      <div className={"nav-container"}>
        <div>React Hooks</div>
        <nav id="sidebar" className={"nav-item-container"}>
          <NavLink to="/" className={"nav-item"}>
            Home
          </NavLink>

          <NavLink to="/game">Game</NavLink>
          {isLoggedIn && <div>{username}</div>}
          {!isLoggedIn && <button onClick={login}>Login</button>}
          {isLoggedIn && <button onClick={logout}>Logout</button>}
        </nav>
      </div>
      <hr />
    </>
  );
};
