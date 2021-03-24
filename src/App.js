import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [Estados, setEstados] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/estados")
      .then((resp) => resp.json())
      .then((estados) => {
        setEstados(estados);
      });
  }, []);

  return (
    <div className="App">
      <h1 className="Titulo">ESTADOS</h1>

      {Estados.map((e) => {
        return (
          <div>
            <div className="estado">
              <div className="opt">
                <li className="id">{e.id}</li>
                <li className="name">{e.nome}</li>
              </div>

              <li className="sigla">{e.sigla}</li>
            </div>

            <div className="divider"></div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
