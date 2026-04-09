import trabajosData from "./data/rutinas";
import { useState } from "react";
import "./App.css";

function App() {
  const [trabajoActual, setTrabajoActual] = useState(0);
  const trabajo = trabajosData[trabajoActual];
  const [imagenActiva, setImagenActiva] =  useState(0);


  return (
    <div className="app">
      <h1>{trabajo.titulo}</h1>

      <div className="galeria">
        {trabajo.rutina.map((ejercicio, index) => (
          <img
            key={index}
            src={ejercicio.img}
            alt={ejercicio.ejercicio}
            className={`miniatura ${imagenActiva === index ? "activa" : ""}`}
            onClick={() => setImagenActiva(index)}
          />
        ))}
      </div>
      <div className="imagen-grande">
        <img src={trabajo.rutina[imagenActiva].img}
        alt={trabajo.rutina[imagenActiva].ejercicio} />
      </div>
    </div>
  );
}

export default App;