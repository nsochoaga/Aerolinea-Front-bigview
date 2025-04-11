import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useEffect } from "react";
import Vuelos from "./pages/Vuelos";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MisReservas from "./pages/MisReservas";
import ReservarVuelo from "./pages/ReservarVuelo";
import Navbar from "./components/Navbar";
import { AuthProvider, useAuth } from "./context/authcontext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Vuelos />} />
          <Route path="/login" element={<Login />} />
          <Route path="/vuelos" element={<VuelosRoute />} />
          <Route path="/reservas" element={<ReservasRoute />} />
          <Route path="/reservar-vuelo" element={<ReservarVuelo />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

const VuelosRoute = () => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <ReservarVuelo /> : <Vuelos />;
};

const ReservasRoute = () => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <MisReservas /> : <Navigate to="/login" />;
};

export default App;
