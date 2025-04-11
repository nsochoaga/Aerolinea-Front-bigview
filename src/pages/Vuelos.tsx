import { useEffect, useState } from "react";
import { apiNoAuth } from "../api/axiosConfig";

interface Vuelo {
  id: number;
  origen: string;
  destino: string;
  fecha_salida: string;
}

function Vuelos() {
  const [vuelos, setVuelos] = useState<Vuelo[]>([]);

  useEffect(() => {
    const fetchVuelos = async () => {
      try {
        const res = await apiNoAuth.get<Vuelo[]>("/vuelos/");
        setVuelos(res.data);
      } catch (err) {
        console.error("Error al obtener vuelos:", err);
      }
    };

    fetchVuelos();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Vuelos disponibles</h2>
      <ul className="space-y-2">
        {vuelos.map((v) => (
          <li key={v.id} className="border p-2 rounded shadow">
            {v.origen} → {v.destino} | {v.fecha_salida}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Vuelos;
