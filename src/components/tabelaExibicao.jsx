import { useState } from "react";

export function TabelaExibicao({ clientes }) {
  const [selecionado, setSelecionado] = useState();

  console.log(selecionado);

  return (
    <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
      <thead className="bg-gray-100 text-gray-600 text-sm">
        <tr>
          <th className="text-left px-4 py-3 font-medium">ID</th>
          <th className="text-left px-4 py-3 font-medium">Nome</th>
          <th className="text-left px-4 py-3 font-medium">Email</th>
        </tr>
      </thead>
      <tbody className="text-sm text-gray-700">
        {clientes.length === 0 ? (
          <tr>
            <td colSpan="3" className="text-center py-6 text-gray-400">
              Nenhum cliente encontrado
            </td>
          </tr>
        ) : (
          clientes.map((cliente) => (
            <tr
              key={cliente.id}
              onClick={() => setSelecionado(cliente)}
              className={`border-t cursor-pointer transition
                    ${
                      selecionado?.id === cliente.id
                        ? "bg-blue-200"
                        : "hover:bg-gray-100"
                    }`}
            >
              <td className="px-4 py-3">{cliente.id}</td>
              <td className="px-4 py-3">{cliente.nome}</td>
              <td className="px-4 py-3">{cliente.email}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}
