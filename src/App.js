import { useState } from "react";

function App() {
  const [numero, setNumero] = useState(1);
  const botones = [
    { id: 1, numero: numero },
    { id: 2, numero: numero + 1 },
    { id: 3, numero: numero + 2 },
    { id: 4, numero: numero + 3 },
    { id: 5, numero: numero + 4 },
  ];
  const [numeroClickado, setNumeroClickado] = useState("");
  const [mensaje, setMensaje] = useState("");
  const sumar = () => {
    if (numero === 16) {
      const nuevoMensaje = "Ya no hay más";
      setMensaje(nuevoMensaje);
      return;
    }
    const nuevoMensaje = "";
    setMensaje(nuevoMensaje);
    setNumero(numero + 1);
  };
  const restar = () => {
    if (numero === 0) {
      const nuevoMensaje = "Ya no hay menos";
      setMensaje(nuevoMensaje);
      return;
    }
    const nuevoMensaje = "";
    setMensaje(nuevoMensaje);
    setNumero(numero - 1);
  };
  const enviaNumero = (numero) => {
    const nuevoNumeroClickado = numero;
    setNumeroClickado(nuevoNumeroClickado);
  };

  return (
    <>
      <div className="contenedor">
        <div className="contenedor-botones">
          <button className="boton boton-cambiar" onClick={restar}>
            «
          </button>
          {botones.map((boton) => (
            <button
              className="boton boton-numero"
              key={boton.numero}
              onClick={() => {
                enviaNumero(boton.numero);
              }}
            >
              {boton.numero}
            </button>
          ))}
          <button className="boton boton-cambiar" onClick={sumar}>
            »
          </button>
        </div>
        <p className="mensaje">{mensaje}</p>
        <p className="numero-clickado">{numeroClickado}</p>
      </div>
    </>
  );
}

export default App;
