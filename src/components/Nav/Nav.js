import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../services/AuthContext";

// Styled
import { NavLink } from "./Nav.styled";

export default function Nav() {
  const [auth, setAuth] = useContext(AuthContext);

  const navigate = useNavigate();

  function logout() {
    setAuth(null);
    navigate("/", { replace: true });
  }

  return (
    <nav>
      <NavLink>
        <Link to="/">Home</Link>
        <Link to="contact">Contact</Link>
        <div>
          {auth ? (
            <>
              <Link to="admin">Admin</Link>

              <button onClick={logout}>Logout</button>
            </>
          ) : (
            <Link to="login">Login</Link>
          )}
        </div>
      </NavLink>
    </nav>
  );
}
