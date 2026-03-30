import "./index.css";
import { useEffect } from "react";
import Header from "./components/header";
import Actions from "./components/actions";
import { TabelaExibicao } from "./components/tabelaExibicao";
import { useState } from "react";

function App() {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/cliente")
      .then((res) => res.json())
      .then((data) => setClientes(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
      <Header />
      <hr className="text-gray-300" />
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="mt-6 text-3xl">
          AC<span className="bg-gray-300 text-gray-100 rounded-md">ME</span>{" "}
          <span className="font-semibold">Acme corp. Admin app</span>
        </h1>
        <p className="mt-4">
          Acme corp. is a global e-com company and this is a support application
          to add new users
        </p>
        <Actions setClientes={setClientes} />
        <hr className="text-gray-300 mt-4" />
        <TabelaExibicao clientes={clientes} />
      </div>
    </>
  );
}

export default App;
