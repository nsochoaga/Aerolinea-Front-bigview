import { useEffect, useState } from "react";
import api from "../api/axiosConfig";

interface Vuelo {
  id: number;
  origen: string;
  destino: string;
  fecha_salida: string;
}

function ReservarVuelo() {
  const [vuelos, setVuelos] = useState<Vuelo[]>([]);
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    const obtenerVuelos = async () => {
      try {
        const res = await api.get<Vuelo[]>("/vuelos/");
        setVuelos(res.data);
      } catch (err) {
        console.error("Error al cargar vuelos:", err);
      }
    };

    obtenerVuelos();
  }, []);

  const reservar = async (vueloId: number) => {
    try {
      await api.post("/reservas/", { vueloId });
      setMensaje("Reserva creada exitosamente ✅");
    } catch (err) {
      console.error("Error al reservar:", err);
      setMensaje("Error al reservar ❌ (¿Estás autenticado?)");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Reservar un Vuelo</h2>
      {mensaje && <p className="mb-4 text-sm text-center">{mensaje}</p>}
      <ul className="space-y-3">
        {vuelos.map((v) => (
          <li
            key={v.id}
            className="border p-3 rounded shadow flex justify-between items-center"
          >
            <div>
              <p>
                {v.origen} → {v.destino}
              </p>
              <p className="text-sm text-gray-600">Salida: {v.fecha_salida}</p>
            </div>
            <button
              onClick={() => reservar(v.id)}
              className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
            >
              Reservar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReservarVuelo;
