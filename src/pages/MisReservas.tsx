import { useEffect, useState } from "react";
import api from "../api/axiosConfig";

interface Vuelo {
  origen: string;
  destino: string;
  fecha_salida: string;
}

interface Reserva {
  id: number;
  vuelo: Vuelo;
  fecha_reserva: string;
}

function MisReservas() {
  const [reservas, setReservas] = useState<Reserva[]>([]);
  const [mensaje, setMensaje] = useState("");

  const obtenerReservas = async () => {
    try {
      const res = await api.get<Reserva[]>("/reservas/");
      setReservas(res.data);
    } catch (err) {
      console.error("Error al obtener reservas:", err);
    }
  };

  useEffect(() => {
    obtenerReservas();
  }, []);

  const cancelarReserva = async (id: number) => {
    try {
      await api.delete(`/reservas/${id}/`);
      setMensaje("Reserva cancelada exitosamente ✅");
      obtenerReservas(); // recarga la lista actualizada
    } catch (err) {
      console.error("Error al cancelar reserva:", err);
      setMensaje("Error al cancelar reserva ❌");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Mis Reservas</h2>
      {mensaje && <p className="mb-4 text-sm text-center">{mensaje}</p>}
      <ul className="space-y-3">
        {reservas.map((reserva) => (
          <li
            key={reserva.id}
            className="border p-3 rounded shadow flex justify-between items-center"
          >
            <div>
              <p>
                ✈️ {reserva.vuelo.origen} → {reserva.vuelo.destino}
              </p>
              <p className="text-sm text-gray-500">
                Vuelo: {reserva.vuelo.fecha_salida} <br />
                Reservado el: {new Date(reserva.fecha_reserva).toLocaleString()}
              </p>
            </div>
            <button
              onClick={() => cancelarReserva(reserva.id)}
              className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
            >
              Cancelar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MisReservas;
