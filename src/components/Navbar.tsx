import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authcontext";
const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-100">
      <div className="space-x-4">
        <Link to="/">Inicio</Link> | <Link to="/vuelos">Vuelos</Link> |
        <Link to="/reservas">Reservas</Link> |
        {!isAuthenticated && <Link to="/login">Login</Link>}
      </div>

      {isAuthenticated && (
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
        >
          Logout
        </button>
      )}
    </nav>
  );
};
export default Navbar;
